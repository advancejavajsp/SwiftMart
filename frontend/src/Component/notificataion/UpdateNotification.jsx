import React, { useContext } from 'react'
import styles from './UpdateNotification.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
const UpdateNotification = () => {
      let {setUpdateProductPanel, productComp,setUpdateProductPopUp}=useContext(globalvar);
      let {name} = productComp
      let navigate=useNavigate();

    const handleClose = (e) => {
      e.stopPropagation(),
      setUpdateProductPanel(false)
    };
      
    const handleEdit = (e) => {
      e.stopPropagation();
      setUpdateProductPanel(false)
      // navigate("/updateProduct", {state:product})
      setUpdateProductPopUp(true)
    };
      

      

  return (
    <section className={styles.notificationPannel} onDoubleClick={(e)=>{e.stopPropagation(), setUpdateProductPanel(false)}}>
    <div className={styles.notification} onClick={(e)=>{e.stopPropagation(), setUpdateProductPanel(true)}}>
      {/* Header */}
      <div className={styles.notificationHeader}>
        <h3 className={styles.notificationTitle}>Update {name}</h3>
        <button className={styles.notificationClose} onClick={handleClose}>
          &times;
        </button>
      </div>
      
      {/* Body */}
      <div className={styles.notificationBody}>
     <p>Do you want to update {name} product?</p>  Click the edit button to make changes and save them.
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
