import React, { useContext } from 'react'
import style from "../navbar/MainNavbar.module.css"
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logo from "../../asset/logo.jpg";
import { globalvar } from '../../GlobalContext/GlobalContext';


const MainNavBar = () => {
    let {loginPanel,setLoginPanel}=useContext(globalvar)
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
                <button className={style['login-btn']} onClick={()=>{setLoginPanel(!loginPanel)}}><h2>Login</h2></button>
                <button className={style['cart-btn']}><IoCartOutline className={style['mycart']}/><h3>My Cart</h3></button>
            </div>
        </nav>


    )
}

export default MainNavBar
