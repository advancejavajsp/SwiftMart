import React from 'react'
import style from './OrderDetails.module.css'
import product1 from '../assest/product1.avif'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentTime } from "react-icons/gr";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";

const OrderDetails = () => {
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
      <div className={style['orderdetailss']}>     
      <button className={style['arrow']}><MdArrowBack className={style['icon']}/></button>
      <div className={style['summary']}>
        <h3>Order summary</h3>
        <p>Arrived at 5:00 pm</p>
        <p className={style['p2']}>2 items in this order</p>
        <div className={style['cards']}>
        <div className={style['details']}>
            <img src={product1} alt="" />
            <div className={style['text']}>
              <p>Pomegranate Peeled</p>
              <p>200 g x 1</p>
            </div>
            <p className={style['price']}>₹165</p>
        </div>
        <div className={style['details']}>
            <img src={product1} alt="" />
            <div className={style['text']}>
              <p>Pomegranate Peeled</p>
              <p>200 g x 1</p>
            </div>
            <p className={style['price']}>₹165</p>
        </div>
        </div>   
      </div>
      <h3 className={style['detailshead']}>Bill details</h3>
      <div className={style['details1']}> 
        <ul>
            <li>MRP</li>
            <li>Product discount</li>
            <li>Item total</li>
            <li>Handling charge</li>
            <li>Delivery charges</li>
            <li><h4>Bill total</h4></li>
        </ul>
        <ul>
            <li>₹315</li>
            <li>-₹101</li>
            <li>₹214</li>
            <li>+₹4</li>
            <li>+₹16</li>
            <li><h4>₹234</h4></li>
        </ul>
      </div>
      <div className={style['address']}>
        <h2>Order details</h2>
        <div className="a1">
        <p>Order id</p>
        <p>ORD861487083</p>
        </div>
        <div className="a2">
        <p>Payment</p>
        <p>Pay on Delivery</p>
        </div>
        <div className="a3">
        <p>Deliver to</p>
        <p>Gurugram</p>
        </div>
        <div className="a4">
        <p>Order placed</p>
        <p>placed on Thu, 31 Oct'24, 4:51 PM</p>
        </div>
      </div>
      <div className={style['chat']}>
        <h3>Need help with your order?</h3>
        <div className={style["content"]}>
        <IoChatboxEllipsesOutline />
        <div className={style["text"]}>
        <h4>Chat with us</h4>
        <p>About any issues related to your order</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OrderDetails
