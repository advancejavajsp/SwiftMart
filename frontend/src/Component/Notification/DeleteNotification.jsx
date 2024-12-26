import React, { useState } from 'react';
import styles from './DeleteNotification.module.css';
const DeleteNotification = () => {
    
    const handleClose = () => {
    };
      
    const handleEdit = () => {
          // Logic for edit action (if any)
    };
      
    const handleCancel = () => {
          // Logic for cancel action (if any)
    };
      


  return (
    <section className={styles.notificationPannel}>
    <div className={styles.notification}>
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
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
    </section>
  )
}

export default DeleteNotification
