import React, { useContext, useEffect, useState } from "react";
import styles from "./MyCart.module.css";
import milkImage from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from '../../asset/cart.png';

const MyCart = () => {
  const { mycartPanel, setMycartPanel,setLoginPanel, cartProducts,setCartProducts,user, setLoaderPanel } = useContext(globalvar);
  const [quantity, setQuantity] = useState(0);

  const handleIncrement =async (product) => {
    if (user) {
      setLoaderPanel(true);
      let response = await axios.post(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
      setCartProducts(response?.data)
      setLoaderPanel(false);
      setQuantity(quantity + 1);
    }else{
      setLoginPanel(true)
    }
  
  };
  
  const handleDecrement = async (product) => {
    setLoaderPanel(true);
    let response = await axios.delete(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
    setCartProducts(response?.data)
      setLoaderPanel(false);
    if (quantity > 0) {
      setQuantity(quantity - 1);
  
    }
  };

  const itemPrice = cartProducts.price;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const total = cartProducts?.price  + deliveryCharge + handlingCharge;

  const navigate = useNavigate();

  const handleProceedToPay = (e) => {
    e.stopPropagation();
    setMycartPanel(false)
    navigate("/Payment" ,{state:{totalPrice:itemPrice,cartProducts,userId:user?.sub}});
  };

  const handleReturnToHome = (e) => {
    e.stopPropagation();
    setMycartPanel(false)
  };

  const cartIsEmpty = !cartProducts?.product?.length;
  
  useEffect(()=>{
    setQuantity(cartProducts?.quantity)
  },[cartProducts])
  return (
    <div
      className={styles["container"]}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setMycartPanel(false);
      }}
    >
      <div
        className={styles.cartContainer}
        onClick={(e) => {
          e.stopPropagation();
          setMycartPanel(true);
        }}
      >
        <div className={styles.header}>
          <h3>My Cart</h3>
          <button
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              setMycartPanel(false);
            }}
          >
            ×
          </button>
        </div>

        {cartIsEmpty ? (
          <div className={styles.emptyCart}>
            <h4>Your Cart is Empty</h4>
            <button className={styles.returnHomeButton} onClick={handleReturnToHome}>
              Return to Home
            </button>
            <div className={styles['img']}>
              <img src={img} alt="" />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.deliveryInfo}>
              <p>Delivery in 8 minutes</p>
              <p>Shipment of {cartProducts?.product?.length} item</p>
            </div>

          <section className={styles.cartItemsContainer}> {cartProducts?.product.map((ele,i) => <div className={styles.cartItem} key={ele.id}>
              <img src={ele.product.imageUrl || milkImage} alt="Amul Milk" className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h4>{ele.product.name}</h4>
                <p>{ele?.quantity}</p>
                <p>₹{ele.product.price * ele.quantity}</p>
              </div>
              <div className={styles.quantityControls}>
                <button onClick={(e)=>{handleDecrement(ele.product)}} className={styles.decreaseButton}>
                  -
                </button>
                <span>{ele.quantity}</span>
                <button onClick={()=>{handleIncrement(ele.product)}} className={styles.increaseButton}>
                  +
                </button>
              </div>
            </div>)}
          
            <div className={styles.billDetails}>
              <h4>Bill details</h4>
              <div className={styles.billRow}>
                <span>Items total</span>
                <span>₹{itemPrice }</span>
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

            <div className={styles.footer}>
              <div className={styles.totalPrice}>₹{total} </div>
              <button className={styles.loginButton} onClick={handleProceedToPay}>
                Proceed to pay ➤
              </button>
            </div>
            </section> 
          </>
        )}
      </div>
    </div>
  );
};

export default MyCart;
