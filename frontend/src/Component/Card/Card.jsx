import React, { useState, useContext, useEffect } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = ({ product,cardProductQuantity }) => {

  console.log(product)
  let {productComp,setLoginPanel, user, setUpdateProductPanel, setDeleteProductPanel, setProductComp, setLoaderPanel,refreshId,setRefreshId } = useContext(globalvar);
  const [quantity, setQuantity] = useState(0);
  let navigate=useNavigate()
   
 useEffect(()=>{
  setQuantity(cardProductQuantity)
 },[cardProductQuantity]);

  const handleIncrement =async (e) => {
    e.stopPropagation()
    if (user) {
      setLoaderPanel(true);
      let response = await axios.post(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
      setRefreshId(refreshId+1)
      setLoaderPanel(false);
      setQuantity(quantity + 1);
      setRefreshId(refreshId+1)
    }else{
      setLoginPanel(true)
    }
  
  };

  
  const handleDecrement = async (e) => {
    e.stopPropagation()
    setLoaderPanel(true);
    let response = await axios.delete(`http://localhost:8080/open/cart/${user?.userId}/${product?.productId}`);
    setRefreshId(refreshId+1)
    setLoaderPanel(false);
    if (quantity > 0) { 
      let res = axios.delete(`http://localhost:8080/open/cart/${user.id}/${product?.productId}`)
      setQuantity(quantity - 1);
    }
    setRefreshId(refreshId-1)
  };

  // let addProduct = ()=>{
  //   let res = axios.post(`http://localhost:8080/open/cart/${user.id}/${""}`)
  // }

  const truncatedTitle = product?.name?.length > 50 ? product?.name?.slice(0, 50) + "..." : product?.name;

  const handleUpdateClick = (e) => {
    e.stopPropagation()
    setProductComp({ ...product});
    setUpdateProductPanel(true); 
  };
  let handleDeleteClick = (e)=>{
    e.stopPropagation()
    setProductComp({ ...product});
    setDeleteProductPanel(true);
  }

  let getProductDetails = (e)=>{
    e.stopPropagation()
    navigate("/cardPage", {state:product})
  }

  return (
    <div className={styles.cardContainer} onClick={getProductDetails}>
      
        <img
          src={product?.imageUrl || Milk}
          alt={truncatedTitle}
          className={styles.productImage}
          
        />
      
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