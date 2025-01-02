import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span className={styles.brandName}>SWIFT MART</span>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;
