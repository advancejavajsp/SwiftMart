import React from 'react'
import style from './order.module.css'
import icon from '../assest/order_icon.webp'
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentTime } from "react-icons/gr";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";

const Order = () => {
  return (
    <div className={style['mainbody']}>
      <div className={style['side']}>
        <ul>
            <li><SlLocationPin className={style['icon']}/>My Addresses</li>
            <li><GrDocumentTime className={style['icon']} />My Orders</li>
            <li><HiOutlineGiftTop className={style['icon']} />E-Gift Cards</li>
            <li><LuLockKeyhole className={style['icon']}/>Account privacy</li>
            <li><FaRegUser className={style['icon']} />Logout</li>
        </ul>
      </div>
      <div className={style['orders']}>
        <div className={style['ordercards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>ORD861487083  ·  ₹234</h3>
            <p>Placed on thu, 31 oct'24, 4:51 pm</p>
            </div>
            <button>view details</button>
        </div>
        <div className={style['ordercards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>ORD861487083  ·  ₹234</h3>
            <p>Placed on thu, 31 oct'24, 4:51 pm</p>
            </div>
            <button>view details</button>
        </div>
      </div>
     
    </div>
  )
}

export default Order
