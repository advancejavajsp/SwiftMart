import React, { useContext, useState } from 'react';
import styles from './DeleteNotification.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';
const DeleteNotification = () => {
     let {setDeleteProductPanel}=useContext(globalvar)
    const handleClose = (e) => {
      e.stopPropagation(), setDeleteProductPanel(false)
    };
      
    const handleEdit = () => {
          // Logic for edit action (if any)
    };
      
 
      


  return (
    <section className={styles.notificationPannel} onClick={(e)=>{e.stopPropagation(), setDeleteProductPanel(false)}}>
    <div className={styles.notification} onClick={(e)=>{e.stopPropagation(), setDeleteProductPanel(true)}}>
      {/* Header */}
      <div className={styles.notificationHeader}>
        <h3 className={styles.notificationTitle}>Delete Card</h3>
        <button className={styles.notificationClose} onClick={handleClose}>
          &times;
        </button>
      </div>
      
      {/* Body */}
      <div className={styles.notificationBody}>
      **"Are you sure you want to delete this card? This action will permanently remove the item, and it cannot be undone. Click the **Delete** button to confirm or **Cancel** to go back."**
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
