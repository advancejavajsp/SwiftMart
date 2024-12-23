import React from "react";
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";

const Card = () => {
  
  const productTitle = "Mother Dairy Cow Fresh Milk"; 

  
  const truncatedTitle = productTitle.length > 50 ? productTitle.slice(0, 50) + "..." : productTitle;

  return (
    <div className={styles.cardContainer}>
      <img
        src={Milk}
        alt="Mother Dairy Cow Fresh Milk"
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        <p className={styles.productSize}>500 ml</p>
        <p className={styles.productPrice}>₹56</p>
        <div className={styles.buttonGroup}>
          <button className={styles.updateButton}>UPDATE</button>
          <button className={styles.deleteButton}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
