import React, { useContext,useEffect } from 'react'
import style from './paymentdetails.module.css'
import product1 from '../../asset/product1.avif'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { globalvar } from '../../GlobalContext/GlobalContext';

const PaymentDetails = () => {
  let {data, setData,paymentdetailsPanel,setPaymentdetailsPanel,cartProducts,setCartProducts} = useContext(globalvar);
  let {state} = useLocation()

  let date=new Date(paymentdetailsPanel.data.paymentDate);
  let orderDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

  const itemPrice = paymentdetailsPanel.data.amount;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const total = paymentdetailsPanel.data.amount  + deliveryCharge + handlingCharge;

  return (
    <div className={style['body']} onDoubleClick={(e)=>{e.stopPropagation(),setPaymentdetailsPanel({data:paymentdetailsPanel.data,visibility:false})}}>
    <div className={style['mainbody']} onDoubleClick={(e)=>{e.stopPropagation(),setPaymentdetailsPanel({data:paymentdetailsPanel.data,visibility:true})}}>
      <button className={style['arrow']}><MdArrowBack className={style['icon']} onClick={(e)=>{e.stopPropagation(),setPaymentdetailsPanel({visibility:false})}}/></button>
      <div className={style['summary']}>
        <h3>Payment summary</h3>
        <p>Arrived at {orderDate}</p>
        <div className={style['details']}>
            <div className={style['text']}>
              <p>PaymentStatus: {paymentdetailsPanel.data.paymentStatus}</p>
              <p>Payment Source : {paymentdetailsPanel.data.paymentMode}</p>
              <p className={style['price']}>Total Amount: ₹{total}</p>
            </div>
            
      </div>
      </div>
      <h3 className={style['detailshead']}>Bill details</h3>
      <div className={style['details1']}> 
        <ul>
            <li>Item total</li>
            <li>Handling charge</li>
            <li>Delivery charges</li>
            <li><h4>Bill total</h4></li>
        </ul>
        <ul>
            <li>{itemPrice }</li>
            <li>₹{handlingCharge}</li>
            <li>₹{deliveryCharge}</li>
            <li><h4>₹{total}</h4></li>
        </ul>
      </div>
      <div className={style['address']}>
        <h2>Payment details</h2>
        <div className="a1">
        <p>UPI transaction id</p>
        <p>{paymentdetailsPanel.data.transactionId}</p>
        </div>
        <div className="a2">
        <p>Payment To:</p>
        <p>paytmqr1fopste2@paytm</p>
        </div>
        <div className="a3">
        <p>From:</p>
        <p>{paymentdetailsPanel.data.paymentId}</p>
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
    </div>

  )
}

export default PaymentDetails
