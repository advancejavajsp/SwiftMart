import React, { useState,useContext  } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";

const Card = ({product}) => {
  let { user,setUpdateProductPanel,setDeleteProductPanel } = useContext(globalvar);
  console.log(product)

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


  const truncatedTitle = product?.name?.length > 50 ? product?.name?.slice(0, 50) + "..." : product?.name;
  const truncateDesc = product?.description?.length > 20 ? product?.description?.slice(0, 20) + "..." : product?.description;

  return (
    <div className={styles.cardContainer}>
      <img
        src={product?.imageUrl || Milk}
        alt={product?.name}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
       {user.role == "ADMIN" &&  <p className={styles.productSize}>{product?.quantityAvailable}</p>}
       
        <p className={styles.productPrice}>{truncateDesc}</p>
        <p className={styles.productPrice}>Price :{product?.price}</p>
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









