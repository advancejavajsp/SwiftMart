import React, { useState, useContext, useEffect } from 'react';
import styles from "./Card.module.css";
import Milk from "../../asset/Milk.avif";
import { globalvar } from "../../GlobalContext/GlobalContext";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdStopwatch } from "react-icons/io";

const Card = ({ product,cardProductQuantity }) => {

  let {productComp,setLoginPanel, user, setUpdateProductPanel, setDeleteProductPanel, setProductComp, setLoaderPanel,refreshId,setRefreshId ,setsearchPanel} = useContext(globalvar);
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

  const truncatedTitle = product?.name?.length > 50 ? product?.name?.slice(0, 50) + "..." : product?.name;

  const handleUpdateClick = (e) => {
    e?.stopPropagation()
    setProductComp({ ...product});
    setUpdateProductPanel(true); 
  };
  let handleDeleteClick = (e)=>{
    e?.stopPropagation()
    setProductComp({ ...product});
    setDeleteProductPanel(true);
  }

  let getProductDetails = (e)=>{
    e.stopPropagation()
    setsearchPanel(false)
    navigate("/cardPage", {state:product})
  }

  return (
    <div className={styles.cardContainer} >
            {(product?.quantityAvailable=== 0 && user?.role !== "ADMIN")  && (
        <div className={styles.overlay}>
          <span className={styles.overlayText}>Out of Stock</span>
        </div>
      )}
        <img
          src={product?.imageUrl || Milk}
          alt={truncatedTitle}
          className={styles.productImage}
          onClick={getProductDetails}
        />
      
      <div className={styles.productDetails}>
        <p className={styles['time']}> {user?.role !== "ADMIN" && <><IoMdStopwatch /> 8min</>}</p>
        <h3 className={styles.productTitle}>{truncatedTitle}</h3>
        {user?.role === "ADMIN" && <p className={styles.productSize}>Quantity: {product?.quantityAvailable}</p>}
        <p className={styles.productPrice}>Price:  ₹ {product?.price} &nbsp;{user?.role !== "ADMIN" && <del className={styles['discount']}>{product?.price + product?.price * 0.05}</del>}</p>
        <div className={styles.buttonGroup}>
          {user?.role == "ADMIN" ? <>  <button className={styles.updateButton} onClick={(e)=>{e.stopPropagation(), handleUpdateClick()}}>UPDATE</button>
            </> : ( quantity === 0 ? (
              <> 
            <button className={styles.addButton} onClick={handleIncrement}>
              ADD
            </button>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;