import React, { useContext } from 'react'
import styles from './UpdateNotification.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
const UpdateNotification = () => {
      let {setUpdateProductPanel}=useContext(globalvar);
      let navigate=useNavigate()
    const handleClose = (e) => {
      e.stopPropagation(),
      setUpdateProductPanel(false)
    };
      
    const handleEdit = (product) => {
      setUpdateProductPanel(false)
      navigate("/updateProduct", {state:product})
    };
      

      

  return (
    <section className={styles.notificationPannel} onClick={(e)=>{e.stopPropagation(), setUpdateProductPanel(false)}}>
    <div className={styles.notification} onClick={(e)=>{e.stopPropagation(), setUpdateProductPanel(true)}}>
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
          onClick={()=>{handleEdit()}}
        >
        Update
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

export default UpdateNotification
