import React, { useState } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  // Increment Quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Decrement Quantity
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Truncate Title if too long
  const productTitle = product?.name || "Mother Dairy Cow Fresh Milk";
  const truncatedTitle =
    productTitle.length > 50 ? productTitle.slice(0, 50) + "..." : productTitle;

  return (
    <div className={styles.cardContainer}>
      <img
        src={product?.image || Milk}
        alt={productTitle}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        <p className={styles.productSize}>{product?.size || "500 ml"}</p>
        <p className={styles.productPrice}>₹{product?.price || "56"}</p>
        <div>
        <button className={styles.updateButton}>UPDATE</button>
        <button className={styles.deleteButton}>DELETE</button>

          {/* {quantity === 0 ? (
            <button className={styles.addButton} onClick={handleIncrement}>
              ADD
            </button>
          ) : (
            <div className={styles.quantityControls}>
              <button className={styles.quantityBtn} onClick={handleDecrement}>
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button className={styles.quantityBtn} onClick={handleIncrement}>
                +
              </button>
            </div>
          )} */}
          </div>
      </div>
    </div>
  );
};

export default Card;









