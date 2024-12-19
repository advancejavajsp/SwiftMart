import React from 'react'
import style from './paymentdetails.module.css'
import product1 from '../assest/product1.avif'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";

const OrderDetails = () => {
  return (
    <div className={style['mainbody']}>
      <button className={style['arrow']}><MdArrowBack className={style['icon']}/></button>
      <div className={style['summary']}>
        <h3>Payment summary</h3>
        <p>Arrived at 5:00 pm</p>
        <div className={style['details']}>
            <img src={product1} alt="" />
            <div className={style['text']}>
              <p>Completed</p>
              <p>Payment Source : UPI</p>
            </div>
            <p className={style['price']}>₹165</p>
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
        <h2>Payment details</h2>
        <div className="a1">
        <p>UPI transaction id</p>
        <p>861487083</p>
        </div>
        <div className="a2">
        <p>Payment To:</p>
        <p>paytmqr1fopste2@paytm</p>
        </div>
        <div className="a3">
        <p>From:</p>
        <p>tanvi1172@oksbi</p>
        </div>
      </div>
      <div className={style['chat']}>
        <h3>Need help with your payments?</h3>
        <div className={style["content"]}>
        <IoChatboxEllipsesOutline />
        <div className={style["text"]}>
        <h4>Chat with us</h4>
        <p>About any issues related to your payment</p>
        </div>
        </div>
      </div>
    </div>

  )
}

export default OrderDetails
