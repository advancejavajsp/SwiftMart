import React from 'react'
import style from "../navbar/MainNavbar.module.css"
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logo from "../../asset/logo.jpg";


const MainNavBar = () => {
    return (
        <nav className={style['navbar']}>
            <div className={style['logo']}>
                <img src={logo} alt="" />
            </div>

            <div className={style["delivery-info"]}>
                <b>Delivery in 8 minutes</b>
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
                <button className={style['login-btn']}>Login</button>
                <button className={style['cart-btn']}><IoCartOutline className={style['mycart']} />My Cart</button>
            </div>
        </nav>


    )
}

export default MainNavBar
