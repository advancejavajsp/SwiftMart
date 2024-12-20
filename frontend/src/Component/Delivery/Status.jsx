import React from 'react'
import style from './status.module.css'
const Status = () => {
  return (
    <div>
    <div className={style["container"]}>
        <h1>Delivery Status</h1>


        <div className={style["activity"]}>
            <div className={style["active"]}>
                <div className={style["circle"]}>1</div>
                <p>Preparing</p>
            </div>
            <div className={style["active"]}>
                <div className={style["circle"]}>2</div>
                <p>Shipped</p>
            </div>
            <div className={style["step"]}>
                <div className={style["circle"]}>3</div>
                <p>Out for Delivery</p>
            </div>
            <div className={style["step"]}>
            <div className={style["circle"]}>4</div>
                <p>Delivered</p>
            </div>
        </div>

        
        <div className={style["details"]}>
            <h2>Order Details</h2>
            <p><b>Order ID:</b> 123456789</p>
            <p><b>Delivery Address:</b> 123 Main Street, City, Country</p>
            <p><b>Estimated Delivery:</b> 3:30 PM</p>
        </div>

    
    <div className={style["Exclusive"]}>
            <h2>Exclusive Offer!</h2>
            <p>Use code <span className={style["offer-code"]}>Swift Mart</span> to get 10% off your next purchase.</p>
            <button className={style["offered"]}>Claim Offer</button>
        </div>
    </div>
</div>
  )
}

export default Status
