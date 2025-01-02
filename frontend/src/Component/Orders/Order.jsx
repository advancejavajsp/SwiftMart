import React, { useContext, useEffect ,useState} from 'react'
import style from './order.module.css'
import { FaArrowLeft } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentTime } from "react-icons/gr";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { globalvar } from '../../GlobalContext/GlobalContext';


const Order = () => {
  let {getOrdersbyUserid , setgetOrdersbyUserid,user} = useContext(globalvar);

  // let [order,setOrder] = useState({
  //   orderID : "",
  //   orderDate : "",
  //   totalAmount : "",
  //   productID : "" ,
  //   quantity : "" ,
  //   price : ""

  // })

  useEffect(() => {
    const fetchOrderDetails = async () => {
        const response = await axios.get(`http://localhost:8080/open/orders/user/${user?.userid}`);
        setgetOrdersbyUserid(response.data?.data.product);
    };

    fetchOrderDetails();
  }, []);
  console.log(setgetOrdersbyUserid);
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
      <Link to="/"><FaArrowLeft className={style['arroww']} /></Link>
      <div className={style['ordercards']}>
       {getOrdersbyUserid.map((order) => (
                <>
                <p>{order.orderID}</p>
                <p>{new Date(order.orderDate).toLocaleDateString()}</p>
                <p>{order.totalAmount}</p>
                <p>{order.productID}</p>
                <p>{order.quantity}</p>
                <p>{order.price}</p>
                </>
            ))}
      </div>
      </div>
     
    </div>
  )
}

export default Order
