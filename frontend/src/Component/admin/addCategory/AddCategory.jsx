import React, { useState, useEffect, useRef } from 'react';
import styles from './addCategory.module.css';

const AddCategory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);  
  const popupRef = useRef(null);  


  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

 
  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

 
  const handleCancel = () => {
    setIsPopupOpen(false);  
  };

  if (!isPopupOpen) return null; 

  return (
    <div className={styles["popupOverlay"]}>
      <div ref={popupRef} className={styles["popupContent"]}>
        <h2>Add Category</h2>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            required
          />
           <label htmlFor="">Description</label>
          <input
            type="text"
            placeholder="Enter category description"
            required
          />
           <label htmlFor="">Image</label>
          <input
            type="text"
            placeholder="Enter Image Url"
            required
          />
          <div className={styles["btn"]}>
            <button type="submit">Add</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
