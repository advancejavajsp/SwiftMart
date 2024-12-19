import React from "react";
import style from "./payment.module.css";

const Payment = () => {
  return (
    <div>
      <div className={style["paymentcheckout"]}>
        <div className={style["checkout"]}>
          <div className={style["check1"]}>
            <span className={style["number"]}>1</span>
            <div className={style["checkf"]}>
              <span className={style["check1_name"]}>Verify Phone Number</span>
              <div className={style["check1_number"]}>"41564156416"</div>
            </div>
          </div>
          <div className={style["check1"]}>
            <span className={style["number2"]}>2</span>
            <div className={style["checks"]}>
              <span className={style["check2_name"]}>Delivery Address</span>
              <div className={style["check2_home"]}>
                <span>home:</span>"Gurgaon"
              </div>
            </div>
          </div>
          <div className={style["payment"]}>
            <div className={style["check3"]}>
              <span className={style["checkout-step__number3"]}>3</span>
              <span>payment</span>
            </div>
            <div className={style["payment-step"]}>
              <section className={style["paymentsection"]}>
                <div className={style["payment-invoice"]}>
                  <div className={style["payment-invoice-row"]}>
                    <div className={style["float-left"]}>Total Amount</div>
                    <div className={style["float-right"]}>"Rs" "8965"</div>
                  </div>
                  <div className={style["payment-invoice-row"]}>
                    <div className={style["float-left1"]}>
                      Amount Payable
                      <span>(incl. of all taxes)</span>
                    </div>
                    <div className={style["float-right2"]}>"$" "88"</div>
                  </div>
                </div>
                <div className={style["promocode-container"]}>
                  <div className={style["promocode"]}>
                    <span>
                      <i className={style["fa-solid fa-percent"]}></i>
                    </span>
                  </div>
                  <div className={style["promocode-text"]}>
                    <span>Promo code &amp; Bank offers</span>
                  </div>
                  <div className={style["promocode-arrow"]}>
                    <i className="fa-solid fa-greater-than"></i>
                  </div>
                </div>
                <div className={style["payment-table"]}>
                  <ul>
                    <li>Wallet</li>
                    <li>UPI</li>
                    <li>Card</li>
                    <li>Cash</li>
                    <li>NetBanking</li>
                  </ul>
                </div>
                <div className={style["soft-btn"]}>
                  <div className={style["payment-wallets"]}>
                    <ul>
                      <li>
                        <label className={style["cards_list"]}>
                          <div className={style["wallet-type"]}>
                            <input
                              type="radio"
                              name="radio-btn"
                              className={style["radiocheck"]}
                            />
                            <img
                              src="https://cdn.grofers.com/app/uploads/payments/paytm.png"
                              alt=""
                            />
                            <div>
                              <span>paytm</span>
                              <span>
                                up to ₹100 Paytm cb | min txn ₹750 | no code
                                needed | valid thrice per user b/w 1-31 Mar '22
                                | t&c apply
                              </span>
                            </div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <label className={style["cards_list"]}>
                          <div className={style["wallet-type"]}>
                            <input
                              type="radio"
                              name="radio-btn"
                              className={style["radiocheck"]}
                            />
                            <img
                              src="https://cdn.grofers.com/app/uploads/payments/mobikwik.png"
                              alt=""
                            />
                            <div>
                              <span>MobiKwik</span>
                              <span>MobiKwik</span>
                              <span>
                                flat 5% MobiKwik cb |min txn ₹799 |no code
                                needed |max cb ₹75
                              </span>
                            </div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className={style["payment-btn"]}>
                    <button id={style["paybtn"]}>Pay Now</button>
                  </div>
                  <div>
                    You will be redirected to wallet’s website to authorize
                    payment
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={style["card-container"]}>
          <div className={style["cardheader"]}>
            <span>My Cart</span>
            <span className={style["totalitems"]}>1 item</span>
          </div>
          <div className={style["cardappended"]}></div>
        </div>
        <div id={style["cardheader1"]}>
          <span id={style["priceM"]}></span> <br />
          <span id={style["strikedPM"]}></span>
        </div>
      </div>
    </div>
  );
};

export default Payment;