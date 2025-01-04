import React, { useContext } from "react";
import style from './paymentsucessful.module.css'
import { globalvar } from "../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const PaymentSucessful = () => {
  let {paymentSuccessful,setPaymentSuccessful,refreshId, setRefreshId}=useContext(globalvar);
 let navigate=useNavigate();


 let handleBackToSubmit=(e)=>{
  setRefreshId(refreshId + 1)
  e.stopPropagation();
  setPaymentSuccessful(false)
  navigate("/");

 }
  return (
    <div>
      <div className={style["pbody"]} onClick={handleBackToSubmit}>
        <div className={style["main-card"]}>
          <div className={style["cut-div"]}>
            <div className={style["card-paytm"]}>
              <div id="login" className={style["fontsize"]}>
                <img
                  src="https://m.media-amazon.com/images/I/41ov7KY-VVL._AC_SS450_.jpg"
                  alt="Banner"
                />
                <h2 className={style["textSize"]}>Payment Successful</h2>

                <button id={style["backtohome"]} onClick={handleBackToSubmit}>Back To Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucessful;
