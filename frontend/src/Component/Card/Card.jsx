import React, { useContext } from "react";
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";

const Card = () => {
  let { user } = useContext(globalvar);
  console.log(user)

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
          {user?.role == "admin" ? <>   <button className={styles.updateButton}>UPDATE</button>
            <button className={styles.deleteButton}>DELETE</button></> : <button className={styles.updateButton}>Add</button>}
        </div>
      </div>
    </div>
  );
};

export default Card;
