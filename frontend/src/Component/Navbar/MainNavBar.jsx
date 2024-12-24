import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import QRCode from 'react-qr-code';
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logo from "../../asset/logo.jpg";
import { globalvar } from '../../GlobalContext/GlobalContext';
import style from "../navbar/MainNavbar.module.css";

const MainNavBar = () => {
    const { loginPanel, setLoginPanel } = useContext(globalvar);
    const isLoggedIn = sessionStorage.getItem('username');

    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        sessionStorage.removeItem('rememberMe');

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
        <nav className={style['navbar']}>
            <div className={style['logo']}>
                <img src={logo} alt="" />
            </div>

            <div className={style["delivery-info"]}>
                <h3><b>Delivery in 8 minutes</b></h3>
                <p>B62, Pocket B, South City I, Sect...</p>
            </div>

            <div className={style["search-bar"]}>
                <CiSearch className={style['search']} />
                <input
                    type="text"
                    placeholder="Search 'egg'"
                />
            </div>

            <div className={style['btn']}>
                {isLoggedIn ? (
                    <>
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
                                        <Link to="/user-profile" onClick={() => setPopupVisible(false)}>
                                            <button className={style["account-button"]}>My Account</button>
                                        </Link>
                                        <ul>
                                            <li>My Orders</li>
                                            <li>Saved Address</li>
                                            <li>E-Gift Cards</li>
                                            <li>FAQ's</li>
                                            <li>Account Privacy</li>
                                            <li>
                                                <button onClick={handleLogout} className={style["account-button"]}>
                                                    Log Out
                                                </button>
                                            </li>
                                        </ul>
                                        <div className={style["qr-section"]}>
                                            <h4>Simple way to get groceries in minutes</h4>
                                            <p>Scan the QR code and download Blinkit app</p>
                                            <QRCode value={qrData} size={100} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button onClick={handleLogout} className={style['login-btn']}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button className={style['login-btn']} onClick={() => setLoginPanel(!loginPanel)}>
                        Login
                    </button>
                )}

                <button className={style['cart-btn']}>
                    <IoCartOutline className={style['mycart']} /> My Cart
                </button>
            </div>
        </nav>
    );
};

export default MainNavBar;
