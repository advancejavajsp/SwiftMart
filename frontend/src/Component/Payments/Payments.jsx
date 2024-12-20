import React from 'react'
import style from './payments.module.css'
import icon from '../../asset/order_icon.webp'


const Payments = () => {
  return (
    <div className={style['mainbody']}>
      <div className={style['payments']}>
        <div className={style['paymentscards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>TTCNI022000800594·₹234</h3>
            <p>Placed on thu, 31 oct'24, 4:51 pm</p>
            </div>
            <button>view details</button>
        </div>
        <div className={style['paymentscards']}>
            <img src={icon} alt="" />
            <div className={style["text"]}>
            <h3>TTCNI022000800594·₹234</h3>
            <p>Placed on thu, 31 oct'24, 4:51 pm</p>
            </div>
            <button>view details</button>
        </div>
      </div>
     
    </div>
  )
}

export default Payments
