import React, { useContext, useState } from "react";
import styles from "./MyCart.module.css";
import milkImage from "../../asset/Milk.avif"; 
import { globalvar } from "../../GlobalContext/GlobalContext";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  let {mycartPanel,setMycartPanel}=useContext(globalvar);
  const [quantity, setQuantity] = useState(1);
 

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const itemPrice = 56;
  const deliveryCharge = 25;
  const handlingCharge = 4;
  const total = itemPrice * quantity + deliveryCharge + handlingCharge;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Payment'); 
  };

  return (
    <div className={styles["container"]} onClick={(e)=>{e.stopPropagation(), setMycartPanel(false)}}>
    <div className={styles.cartContainer} onClick={(e)=>{e.stopPropagation(), setMycartPanel(true)}}>
      <div className={styles.header}>
        <h3>My Cart</h3>
        <button className={styles.closeButton} onClick={(e)=>{e.stopPropagation(), setMycartPanel(false)}}>×</button>
      </div>

      <div className={styles.deliveryInfo}>
        <p>Delivery in 8 minutes</p>
        <p>Shipment of 1 item</p>
      </div>

      <div className={styles.cartItem}>
        <img src={milkImage} alt="Amul Milk" className={styles.itemImage} />
        <div className={styles.itemDetails}>
          <h4>Amul Taaza Toned Fresh Milk</h4>
          <p>1 ltr</p>
          <p>₹{itemPrice}</p>
        </div>
        <div className={styles.quantityControls}>
          <button onClick={decreaseQuantity} className={styles.decreaseButton}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className={styles.increaseButton}>
            +
          </button>
        </div>
      </div>

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

      <div className={styles.footer}>
        <div className={styles.totalPrice}>₹{total} TOTAL</div>
       <button className={styles.loginButton} onClick={handleClick}>Proceed to pay ➤</button>
      </div>
    </div>
    </div>
  );
};

export default MyCart;
