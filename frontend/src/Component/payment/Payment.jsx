import React, { useContext, useEffect, useState } from "react";
import style from "./payment.module.css";
import mobikwik from "../../asset/mobikwik.webp"
import paytm from "../../asset/paytm.webp"
import { globalvar } from "../../GlobalContext/GlobalContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cart from "../MyCart/MyCart";
import styles from "../MyCart/MyCart.module.css";
import milkImage from "../../asset/Milk.avif";


const Payment = () => {

  const [upiId, setUpiId] = useState('');
  const { paymentSuccessful, setPaymentSuccessful, userData, userDetails, setLoaderPanel, user, product, cartProducts, rez, mycartPanel, setMycartPanel, setLoginPanel, setCartProducts } = useContext(globalvar);
  const [quantity, setQuantity] = useState(0);


  let { state } = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    orderStatus: "Success",
    paymentMode: "",
    productDetails: state.cartProducts,
  })

  const itemPrice = cartProducts.price;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const total = itemPrice + deliveryCharge + handlingCharge;

  const handlePayment = (method) => {
    setOrderDetails({ ...orderDetails, paymentMode: method })
  }

  const handleUpiChange = (event) => {
    setUpiId(event.target.value)
  }

  const handleSubmit = async (e) => {
    setLoaderPanel(true);

    try {
      const response = await axios.post(
        `http://localhost:8080/open/orders/place-order/${user.userId}/PAY0031`
      );

      console.log(response);

      if (response.status == 200) {
        setPaymentSuccessful(true);
        toast.success("Payment Successful");
      } else {
        setPaymentSuccessful(false);
        toast.error("Payment Unsuccessful");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
      setPaymentSuccessful(false);
      toast.error("Payment Unsuccessful");
    } finally {
      setLoaderPanel(false);
    }
  };

  const handleIncrement = async (product) => {
    if (user) {
      setLoaderPanel(true);
      let response = await axios.post(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
      setCartProducts(response?.data)
      setLoaderPanel(false);
      setQuantity(quantity + 1);
    } else {
      setLoginPanel(true)
    }

  };


  const handleDecrement = async (product) => {
    setLoaderPanel(true);
    console.log(user?.userId);
    console.log(product?.productId)
    let response = await axios.delete(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
    setCartProducts(response?.data)
    setLoaderPanel(false);
    if (quantity > 0) {
      setQuantity(quantity - 1);

    }
  };

  useEffect(() => {
    setQuantity(cartProducts?.quantity)
  }, [cartProducts])

  useEffect(() => { userData(state.userId) }, [])
  return (
    <div>
      <div className={style["paymentcheckout"]}>
        <div className={style["checkout"]}>
          <div className={style["check1"]}>
            <span className={style["number"]}>1</span>
            <div className={style["checkf"]}>
              <span className={style["check1_name"]}>Verify Phone Number</span>
              <div className={style["check1_number"]}>{userDetails?.phone}</div>
            </div>
          </div>
          <div className={style["check1"]}>
            <span className={style["number2"]}>2</span>
            <div className={style["checks"]}>
              <span className={style["check2_name"]}>Delivery Address</span>
              <div className={style["check2_home"]}>
                <span>home:</span>{userDetails?.address || " Gurugram"}
              </div>
            </div>
          </div>
          <div className={style["payment"]}>
            {/* <div className={style["check3"]}>
              <span>payment</span>
            </div> */}
            <div className={style["payment-step"]}>
              <section className={style["paymentsection"]}>
                <div className={style["payment-invoice"]}>
                  <div className={style["payment-invoice-row"]}>
                    <div className={style["float-left"]}>Total Amount</div>
                    <div className={style["float-right"]}>Rs {state?.totalPrice}</div>
                  </div>
                  <div className={style["payment-invoice-row"]}>
                    <div className={style["float-left1"]}>
                      Amount Payable
                      <span>(incl. of all taxes)</span>
                    </div>
                    <div className={style["float-right2"]}>Rs {Math.ceil(state?.totalPrice + state?.totalPrice * 0.18)}</div>
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
                    <li onClick={() => handlePayment('Wallet')}>Wallet</li>
                    <li onClick={() => handlePayment('UPI')}>UPI</li>
                    <li onClick={() => handlePayment('Card')}>Card</li>
                    <li onClick={() => handlePayment('Cash')}>Cash</li>
                    <li onClick={() => handlePayment('NetBanking')}>NetBanking</li>
                  </ul>
                  {orderDetails.paymentMode === 'UPI' && (
                    <div className={style["upi-dropdown"]}>
                      <label htmlFor="upi">Enter UPI ID:</label>
                      <input
                        type="text"
                        id="upi"
                        value={upiId}
                        onChange={handleUpiChange}
                        placeholder="Enter UPI ID"
                      />
                    </div>
                  )}
                </div>
                <div className={style["wallets"]}>
                  <div className={style["payment-wallets"]}>
                    <ul className={style["lia"]}>
                      <li >
                        <label className={style["cards_list"]}>
                          <div className={style["wallet-type"]}>
                            <input
                              type="radio"
                              name="radio-btn"
                              className={style["radiocheck"]}
                            />
                            <img
                              src={paytm}
                              alt=""
                            />
                            <div>
                              <span>paytm</span>
                              <span>
                                up to ₹100 Paytm cb | min txn ₹750 | no code
                                needed | valid thrice per user

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
                              src={mobikwik}
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
                    <button id={style["paybtn"]} onClick={() => { handleSubmit() }}>Pay Now</button>
                  </div>
                  <div className={style["payment-text"]}>
                    You will be redirected to wallet’s website to authorize
                    payment
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={style["card-container"]}>
          <div className={styles.header}>
            <h3>My Cart</h3>

          </div>

          <div className={styles.deliveryInfo}>
            <p>Delivery in 8 minutes</p>
            <p>Shipment of {cartProducts?.product?.length} item</p>
          </div>

          <section className={styles.cartItemsContainer}> {cartProducts?.product.map((ele, i) => <div className={styles.cartItem} key={ele.id}>
            <img src={ele.product.imageUrl || milkImage} alt="Amul Milk" className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h4>{ele.product.name}</h4>
              <p>{ele?.quantity}</p>
              <p>₹{ele.product.price * ele.quantity}</p>
            </div>

          </div>)}

            <div className={styles.billDetails}>
              <h4>Bill details</h4>
              <div className={styles.billRow}>
                <span>Items total</span>
                <span>₹{itemPrice * quantity}</span>
              </div>
              <div className={styles.billRow}>
                <span>Delivery charge</span>
                <span>₹{deliveryCharge}</span>
              </div>
              <div className={styles.billRow}>
                <span>Handling charge</span>
                <span>₹{handlingCharge}</span>
              </div>
              <div className={styles.billRowTotal}>
                <span>Grand total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className={styles.cancellationPolicy}>
              <h4>Cancellation Policy</h4>
              <p>
                Orders cannot be cancelled once packed for delivery. In case of
                unexpected delays, a refund will be provided, if applicable.
              </p>
            </div>


          </section>

        </div>
      </div>
    </div>
  );
};

export default Payment;
