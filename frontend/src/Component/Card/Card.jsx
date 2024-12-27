import React, { useState,useContext  } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { Link } from 'react-router-dom';

const Card = ({product}) => {
  let { user,setUpdateProductPanel,setDeleteProductPanel } = useContext(globalvar);
  console.log(user)

  const [quantity, setQuantity] = useState(user || 0);

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
  const productTitle = "Mother Dairy Cow Fresh Milk";


  const truncatedTitle = productTitle.length > 50 ? productTitle.slice(0, 50) + "..." : productTitle;

  return (
  
  <div className={styles.cardContainer}>
     <Link to='/cardPage'><img
        src={product?.image || Milk}
        alt={productTitle}
        className={styles.productImage}
      /></Link>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        <p className={styles.productSize}>500 ml</p>
        <p className={styles.productPrice}>₹56</p>
        <div className={styles.buttonGroup}>
          {user?.role == "ADMIN" ? <>   <button className={styles.updateButton} onClick={(e)=>{e.stopPropagation(), setUpdateProductPanel(true)}}>UPDATE</button>
            <button className={styles.deleteButton}  onClick={(e)=>{e.stopPropagation(), setDeleteProductPanel(true)}}>DELETE</button></> :         ( quantity === 0 ? (
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
          ))
}
        </div>
      </div>
    </div>
  );
};

export default Card;









