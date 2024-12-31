import React, { useContext, useState } from 'react';
import styles from './DeleteNotification.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';
import axios from 'axios';
const DeleteNotification = () => {
     let {setDeleteProductPanel, productComp}=useContext(globalvar)
     let {name} = productComp

    const handleClose = (e) => {
      e.stopPropagation(), setDeleteProductPanel(false)
    };
      
    const handleEdit = () => {
          // Logic for edit action (if any)
          let response = axios.delete(`http://localhost:8080/open/products/${product.productId}`)
          console.log(response.data)
    };
  return (
    <section className={styles.notificationPannel} onClick={(e)=>{e.stopPropagation(), setDeleteProductPanel(false)}}>
    <div className={styles.notification} onClick={(e)=>{e.stopPropagation(), setDeleteProductPanel(true)}}>
      {/* Header */}
      <div className={styles.notificationHeader}>
        <h3 className={styles.notificationTitle}>Delete  {name}</h3>
        <button className={styles.notificationClose} onClick={handleClose}>
          &times;
        </button>
      </div>
      
      {/* Body */}
      <div className={styles.notificationBody}>
     <p> Are you sure you want to delete {name}?</p>Click the delete button to make changes.
      </div>
      
      {/* Footer */}
      <div className={styles.notificationFooter}>
        <button
          className={styles.notificationButton}
          onClick={handleEdit}
        >
          Delete
        </button>
        <button
          className={`${styles.notificationButton} ${styles.cancelButton}`}
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </div>
    </section>
  )
}

export default DeleteNotification
