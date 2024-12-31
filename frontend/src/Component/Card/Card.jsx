import React, { useState, useContext, useEffect } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = ({ product,cardProductQuantity }) => {
  let {productComp,setLoginPanel, user, setUpdateProductPanel, setDeleteProductPanel, setProductComp, setLoaderPanel } = useContext(globalvar);
  const [quantity, setQuantity] = useState(0);

   
 useEffect(()=>{
  setQuantity(cardProductQuantity)
 },[cardProductQuantity]);

  const handleIncrement =async () => {
    if (user) {
      setLoaderPanel(true);
      let response = await axios.post(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
      setLoaderPanel(false);
      setQuantity(quantity + 1);
    }else{
      setLoginPanel(true)
    }
  
  };

  
  const handleDecrement = async () => {
    setLoaderPanel(true);
    let response = await axios.delete(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
    setLoaderPanel(false);
    if (quantity > 0) {
      let res = axios.delete(`http://localhost:8080/open/cart/${user.id}/${product?.productId}`)
      setQuantity(quantity - 1);
    }
  };

  // let addProduct = ()=>{
  //   let res = axios.post(`http://localhost:8080/open/cart/${user.id}/${""}`)
  // }

  const truncatedTitle = product?.name?.length > 50 ? product?.name?.slice(0, 50) + "..." : product?.name;

  const handleUpdateClick = (e) => {
    setProductComp({ ...product});
    setUpdateProductPanel(true); 
  };
  let handleDeleteClick = ()=>{
    
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
          {user?.role == "ADMIN" ? <>  <button className={styles.updateButton} onClick={(e)=>{e.stopPropagation(), handleUpdateClick()}}>UPDATE</button>
            <button className={styles.deleteButton}  onClick={(e)=>{e.stopPropagation(), handleDeleteClick()}}>DELETE</button></> :         ( quantity === 0 ? (
            <button className={styles.addButton} onClick={handleIncrement}>
              ADD
            </button>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;