import React, { useContext } from "react";
import style from './paymentsucessful.module.css'
import { Link } from "react-router-dom";
import { globalvar } from "../../GlobalContext/GlobalContext";

const PaymentSucessful = () => {
  let {PaymentSucessful, setPaymentSuccessful} = useContext(globalvar)
  return (
    <div>
      <div className={style["pbody"]}>
        <div className={style["main-card"]}>
          <div className={style["cut-div"]}>
            <div className={style["card-paytm"]}>
              <div id="login" className={style["fontsize"]}>
                <img
                  src="https://m.media-amazon.com/images/I/41ov7KY-VVL._AC_SS450_.jpg"
                  alt="Banner"
                />
                <h2 className={style["textSize"]}>Payment Successful</h2>

                <Link to ="/" ><button id={style["backtohome"]} onClick={setPaymentSuccessful(false)}>Back To Home</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucessful;
