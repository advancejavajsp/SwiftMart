import React, { useState, useContext } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = ({ product }) => {
  let { user, setUpdateProductPanel, setDeleteProductPanel, setProductComp } = useContext(globalvar);
  const [quantity, setQuantity] = useState(0);


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const truncatedTitle = product?.name?.length > 50 ? product?.name?.slice(0, 50) + "..." : product?.name;

  const handleUpdateClick = (e) => {
    e.stopPropagation(); 
    
    setProductComp({ ...product});
    setUpdateProductPanel(true); 
  };
  let handleDeleteClick = (e)=>{
    
    console.log("first")
    e.stopPropagation(product.productId);
    setProductComp({ ...product});


    
    setDeleteProductPanel(true);
  }

  return (
    <div className={styles.cardContainer}>
      <Link to='/cardPage'>
        <img
          src={product?.image || Milk}
          alt={truncatedTitle}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        {user?.role === "ADMIN" && <p className={styles.productSize}>Quantity: {product?.quantityAvailable}</p>}
        <p className={styles.productPrice}>Price: {product?.price}</p>
        <div className={styles.buttonGroup}>
          {user?.role === "ADMIN" ? (
            <>
              <button className={styles.updateButton} onClick={handleUpdateClick}>UPDATE</button>
              <button className={styles.deleteButton} onClick={ handleDeleteClick  }>DELETE</button>
            </>
          ) : (
            quantity === 0 ? (
              <button className={styles.addButton} onClick={handleIncrement}>
                ADD
              </button>
            ) : (
              <div className={styles.quantityControls}>
                <button className={styles.quantityBtn} onClick={handleDecrement}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.quantityBtn} onClick={handleIncrement}>+</button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;