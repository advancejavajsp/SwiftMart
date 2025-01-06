import React, { useEffect, useState } from 'react'
import style from './payments.module.css'
import icon from '../../asset/order_icon.webp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { globalvar } from '../../GlobalContext/GlobalContext'

const Payments = () => {
  let {paymentdetailsPanel,setPaymentdetailsPanel} = useContext(globalvar);
  let [paymentData, setPaymentData] = useState([]);
  let handleData = async()=>{
    let res = await axios.get("http://localhost:8080/open/swiftmart/payments")
    let data = res.data;
    setPaymentData(data)
   
  }


useEffect(()=>{
  handleData();

},[])
  return (
    <div className={style['mainbody']}>
      <div className={style['payments']}>
        {paymentData?.map((ele, i)=><>
          <div className={style['paymentscards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>{ele.transactionId}</h3>
            <p>{ele.paymentDate}</p>
            </div>
            <button onClick={()=>{setPaymentdetailsPanel(!paymentdetailsPanel)}}>view details</button>
        </div>
        </>)}
        
       
      </div>
     
    </div>
  )
}

export default Payments
