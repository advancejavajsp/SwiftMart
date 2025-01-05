import React, { useContext, useEffect, useState } from 'react';
import style from './order.module.css';
import { FaArrowLeft } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentTime } from "react-icons/gr";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import icon from '../../asset/order_icon.webp'
import { globalvar } from '../../GlobalContext/GlobalContext';

const Order = () => {
  const { user,loaderPanel , setLoaderPanel ,} = useContext(globalvar); // For user context if needed
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();


  console.log(state)
  // Function to fetch data
  const fetchDetails = async () => {
    try {
      const endpoint = state === 'payments' ? 'payments' : 'get';
      setLoaderPanel(true)
      const res = await axios.get(`http://localhost:8080/open/swiftmart/${endpoint}`);
      setData(res.data);
      setLoaderPanel(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error)
    }
  };
console.log(data)
  // Function to handle navigation
  const handleNavigation = (url, endPoint) => {
    navigate(url, { state: endPoint });
  };

  useEffect(() => {
   
    fetchDetails();
  }, [state]);

  // Dynamic data rendering based on state

  const renderData = () => {
    if (state === 'get') {
      // Render orders
      return data.map((order, index) => (
        <div key={index} className={style['ordercard']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
          <h3>Order ID: {order.orderId}</h3>
          <p>Order Date: {order.createdAt}</p>
          </div>
          <button onClick={()=>{orderDetails(ele)}}>view details</button>
        
        </div>
      ));
    } else if (state === 'payments') {
      // Render payments
      return data.map((payment, index) => (
        <div className={style['paymentscards']}>
        <img src={icon} alt="" />
        <div className={style["text"]}>
        <h3>Payment ID: {payment.transactionId}</h3>
        <p>Payment Date: {payment.paymentDate}</p>
        </div>
        <button onClick={()=>{paymentDetails(ele)}}>view details</button>
    </div>
      ));
    } else {
      return <p>No data available</p>;
    }
    
  };

  return (
    <div className={style['mainbody']}>
      {/* Sidebar */}
      <div className={style['side']}>
        <ul>
          <li>
            <SlLocationPin className={style['icon']} /> My Addresses
          </li>
          <li onClick={() => handleNavigation('/orders', 'get')}  className={`${style["menu-item"]} ${
              state === "get" ? style["active"] : ""
            }`}>
            <GrDocumentTime className={style['icon']} /> My Orders
          </li>
          <li onClick={() => handleNavigation('/payments', 'payments')}  className={`${style["menu-item"]} ${
              state === "payments" ? style["active"] : ""
            }`}>
            <GrDocumentTime className={style['icon']} /> My Payments
          </li>
          <li>
            <HiOutlineGiftTop className={style['icon']} /> E-Gift Cards
          </li>
          <li>
            <LuLockKeyhole className={style['icon']} /> Account Privacy
          </li>
          <li>
            <FaRegUser className={style['icon']} /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={style['orders']}>
      
        <Link to="/">
          <FaArrowLeft className={style['arroww']} />
        </Link>
      
        <div className={style['ordercards']}>{renderData()}</div>
      </div>
    </div>
  );
};

export default Order;
