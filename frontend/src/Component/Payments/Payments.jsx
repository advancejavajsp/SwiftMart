import React, { useEffect, useState } from 'react'
import style from './payments.module.css'
import icon from '../../asset/order_icon.webp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Payments = () => {

  let navigate = useNavigate()
  let [paymentData, setPaymentData] = useState([]);
  let handleData = async()=>{
    let res = await axios.get("http://localhost:8080/open/swiftmart/payments")
    let data = res.data;
    setPaymentData(data)
   
    console.log(paymentData)
  }

  let paymentDetails = (ele)=>{
    navigate("/PaymentDetails",{state:ele})
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
            <button onClick={()=>{paymentDetails(ele)}}>view details</button>
        </div>
        </>)}
        
        {/* <div className={style['paymentscards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>TTCNI022000800594·₹234</h3>
            <p>Placed on thu, 31 oct'24, 4:51 pm</p>
            </div>
            <button>view details</button>
        </div> */}
      </div>
     
    </div>
  )
}

export default Payments
