import React, { useContext, useEffect ,useState} from 'react'
import style from './order.module.css'
import { FaArrowLeft } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GrDocumentTime } from "react-icons/gr";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { LuLockKeyhole } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { globalvar } from '../../GlobalContext/GlobalContext';
import Payments from '../Payments/Payments';


const Order = () => {
  let {getOrdersbyUserid , setgetOrdersbyUserid,user} = useContext(globalvar);

  let [data,setData] = useState()

  let {state}=useLocation();
    const fetchOrderDetails = async () => {
      let res = await axios.get(`http://localhost:8080/open/swiftmart/${state}`)
       console.log(res);
       setData(res.data)
    };

   
    let navigate = useNavigate();

    let getOrderAndPayments = (url,endPoint)=>{
    navigate(url,{state:endPoint})
  
    }

    useEffect(()=>{
      fetchOrderDetails();
    },[state])
  
  return (
    <div className={style['mainbody']}>
      <div className={style['side']}>
        <ul>
            <li><SlLocationPin className={style['icon']}/>My Addresses</li>
            <li onClick={(e)=>{e.stopPropagation(),getOrderAndPayments("/orders","get")}}><GrDocumentTime className={style['icon']} />My Orders</li>
            <li onClick={(e)=>{e.stopPropagation(),getOrderAndPayments("/payments","payments")}}><GrDocumentTime className={style['icon']} />My Payments</li>
            <li><HiOutlineGiftTop className={style['icon']} />E-Gift Cards</li>
            <li><LuLockKeyhole className={style['icon']}/>Account privacy</li>
            <li><FaRegUser className={style['icon']} />Logout</li>
        </ul>
      </div>
      {state=="get" ?<div className={style['orders']}>
      <Link to="/"><FaArrowLeft className={style['arroww']} /></Link>
      <div className={style['ordercards']}>
        {data?.map((ele) => (
                <>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                </>
            )) } 
      </div>
      </div>: <Payments/>}
     
    </div>
  )
}

export default Order
