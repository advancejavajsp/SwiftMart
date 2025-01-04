import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logo from "../../asset/logo.jpg";
import { globalvar } from "../../GlobalContext/GlobalContext";
import style from "../navbar/MainNavbar.module.css";

const useTypewriter = (texts, speed = 100, pause = 1000) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => texts[currentIndex].slice(0, prev.length + 1));

        if (currentText === texts[currentIndex]) {
          setIsTyping(false);
        }
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setCurrentText("");
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, texts, currentIndex, speed, pause]);

  return currentText;
};

const MainNavBar = () => {
  const { loginPanel, setLoginPanel,addressPanel,setaddressPanel, mycartPanel, setMycartPanel, user, setUser ,refreshId,setRefreshId, setLoaderPanel} = useContext(globalvar);
  const searchBarRef = useRef();
  const [isPopupVisible, setPopupVisible] = useState(false);
  let [address, setAddress]=useState('B62, Pocket B, South City I, Sect...');
  const popupRef = useRef(null);  // Add reference for the popup container
  let navigate=useNavigate();
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleLogout = () => {
    setLoaderPanel(true);
    localStorage.removeItem("token");
    setPopupVisible(false);
    setRefreshId(refreshId+ 1);

    setTimeout(()=>{
      navigate("/")
      setLoaderPanel(false);
    },1500)
    setUser("");
  };

  const getNavbarQRData = (userData) => {
    return `Name: ${userData?.userName}\nEmail: ${userData?.email}`;
  };

  const qrData = getNavbarQRData(user);
  const typewriterPlaceholder = useTypewriter(["Search 'eggs'", "Search 'milk'", "Search 'bread'"], 100, 2000);


  // Effect to handle click outside popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false);  // Close the popup if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(()=>{
   setAddress(JSON.parse(localStorage.getItem("address")));
   console.log(localStorage.getItem("address"))
  },[refreshId])
  return (
    <nav className={style["navbar"]} >
      <div className={style["logo"]}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={style["delivery-info"]} onClick={()=>{setaddressPanel(!addressPanel)}}>
        <h3>
          <b>Delivery in 8 minutes</b>
        </h3>
        <p>{(`B${refreshId} ${address.city} , ${address.country} `) ||'B62, Pocket B, South City I, Sect...'}</p>
      </div>

      <div className={style["search-bar"]}>
        <ul className={style["search-bar-ul"]}>
          <li><CiSearch className={style["search"]} /></li>
          <li><input type="text" placeholder={typewriterPlaceholder} ref={searchBarRef} /></li>
        </ul>
      </div>

      <div className={style["btn"]}>
        {user ? (
          <>
            <div className={style["account-section"]}>
              <button className={style["account-button"]} onClick={togglePopup}>
                Account ▼
              </button>

              {isPopupVisible && (
                <div className={style.popup} ref={popupRef}>
                  <div className={style["popup-content"]}>
                   
                      <button className={style["account-button"]} onClick={(e) => {e.stopPropagation(), setPopupVisible(false),setUserProfilePanel(true)}}>My Account</button>
                    <ul>
                    <Link to="/order"><li>My Orders</li></Link>
                      <li className={style["Save-Address-li"]} onClick={()=>{setaddressPanel(!addressPanel)}} >Saved Address</li>
                      <li>E-Gift Cards</li>
                      <li>FAQ's</li>
                      <li>Account Privacy</li>
                      <li>
                        <button onClick={handleLogout} className={style["logout-button"]}>
                          Log Out
                        </button>
                      </li>
                    </ul>
                    <div className={style["qr-section"]}>
                      <h4>Simple way to get groceries in minutes</h4>
                      <p>Scan the QR code and download the SwiftMart app</p>
                      <QRCode value={qrData} size={100} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <button className={style["login-btn"]} onClick={() => setLoginPanel(!loginPanel)}>
            Login
          </button>
        )}

{user?.role !== "ADMIN" && (
  <button className={style["cart-btn"]} onClick={() => setMycartPanel(!mycartPanel)}>
    <IoCartOutline className={style["mycart"]} /> My Cart
  </button>
)}
      </div>
    </nav>
  );
};

export default MainNavBar;