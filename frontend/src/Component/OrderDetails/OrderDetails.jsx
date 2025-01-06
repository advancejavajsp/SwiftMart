import React, { useContext,useState } from "react";
import styles from "../OrderDetails/orderdetails.module.css";
import { MdArrowBack } from "react-icons/md";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { useLocation } from "react-router-dom";

const OrderDetails = (order) => {
  let {data, setData,orderdetailsPanel,setOrderdetailsPanel} = useContext(globalvar);
  let {state} = useLocation()
  let [address, setAddress]=useState(null);
  let date=new Date(orderdetailsPanel?.data?.createdAt);
  let orderDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

  return (
    <div className={styles.mainbody} onDoubleClick={(e)=>{e.stopPropagation(),setOrderdetailsPanel({data:orderdetailsPanel.data, visibility:false})}}>
    <div className={styles.container} onDoubleClick={(e)=>{e.stopPropagation(),setOrderdetailsPanel({data:orderdetailsPanel.data,visibility:true})}}>
       <button className={styles['arrow']}><MdArrowBack className={styles['icon']} onClick={(e)=>{e.stopPropagation(),setOrderdetailsPanel({visibility:false})}}/></button>
      <div className={styles['summary']}>
             <h3>Order summary</h3>
             <p>Arrived at  {orderDate}</p>
             <div className={styles['details']}>
                 <div className={styles['text']}>
                   <p>orderId: {orderdetailsPanel.data.orderId} </p>
                   <p>orderStatus: {orderdetailsPanel.data.orderStatus}</p>
                   <p>deliveredAt:{address ?(`${orderdetailsPanel.data.deliveredAt }`) :'Gurgaon'} </p>
                   <p className={styles['price']}>Total Amount:  ₹{orderdetailsPanel.data.totalAmount}</p>
                 </div>
                 
           </div>
           </div>
    </div>
    </div>
  );
};

export default OrderDetails;
