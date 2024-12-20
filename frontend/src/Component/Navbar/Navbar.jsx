
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import QRCode from 'react-qr-code';  
import style from "./Navbar.module.css"; 

function Navbar() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const userData = {
    name: "Hemant Kumar Verma",
    email: "XXXXXXX@gmail.com",
  };

  const getNavbarQRData = (userData) => {
    return `Name: ${userData.name}\nEmail: ${userData.email}`;
  };

  const qrData = getNavbarQRData(userData); 

  return (
    <nav className={style.navbar}>
      <div className={style["nav-brand"]}>SwiftMart</div>

      <div className={style["nav-items"]}>
        <div className={style["account-section"]}>
          <button className={style["account-button"]} onClick={togglePopup}>
            Account ▼
          </button>

          {isPopupVisible && (
            <div className={style.overlay} onClick={togglePopup}></div>
          )}

          {isPopupVisible && (
            <div className={style.popup}>
              <div className={style["popup-content"]}>
                <Link to="/user-profile">
                  <button className={style["account-button"]}>My Account</button>
                </Link>
                <ul>
                  <li>My Orders</li>
                  <li>Saved Address</li>
                  <li>E-Gift Cards</li>
                  <li>FAQ's</li>
                  <li>Account Privacy</li>
                  <li>Log Out</li>
                </ul>
                <div className={style["qr-section"]}>
                  <h4>Simple way to get groceries in minutes</h4>
                  <p>Scan the QR code and download blinkit app</p>
                  <QRCode value={qrData} size={100} /> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
