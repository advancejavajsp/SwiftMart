import React from 'react'
import styles from './UpdateNotification.module.css';
const UpdateNotification = () => {
    
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
        <h3 className={styles.notificationTitle}>Update Card</h3>
        <button className={styles.notificationClose} onClick={handleClose}>
          &times;
        </button>
      </div>
      
      {/* Body */}
      <div className={styles.notificationBody}>
      "Do you want to update this card? You can change the details, adjust the quantity, or modify the price. Click the edit button to make changes and save them."
      </div>
      
      {/* Footer */}
      <div className={styles.notificationFooter}>
        <button
          className={styles.notificationButton}
          onClick={handleEdit}
        >
        Update
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

export default UpdateNotification
