import React from "react";
import style from './paymentsucessful.module.css'

const PaymentSucessful = () => {
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
                <h2 className={style["textSize"]}>payment Successful</h2>

                <button id={style["backtohome"]}>Back To Home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucessful;
