import React from 'react';
import styles from './CardPage.module.css';
import Milk from "../asset/Milk.avif";
import Why1 from "../asset/Why1.avif";
import Why2 from "../asset/Why2.avif";
import Why3 from "../asset/Why3.avif";
const CardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img 
          src={Milk}
          alt="Amul Taaza Milk" 
          className={styles.productImage} 
        />
        <div className={styles.textlist}>
            <h1>Product Details</h1>
            <ul>
                <li><h3>Cow Milk</h3>TypeType</li>
            </ul>
            <ul>
                <li><h3>Key Features</h3>Pure and fresh cow's milk</li>
                <li>Wholesome and tasty</li>
                <li>Packed with great nutrition</li>
                <li>Easily digestible</li>
                <li>Rich in calcium content</li>
            </ul>
            <ul>
                <li><h3>Unit</h3>500 ml</li>
            </ul>
            <ul>
                <li><h3>FSSAI License</h3>10014011001895</li>
            </ul>
            <ul>
                <li><h3>Shelf Life</h3>2 days</li>
            </ul>
            <ul>
                <li><h3>Return Policy</h3>The product is non-returnable. For a damaged, defective, expired or incorrect item,</li>
                <li>you can request a replacement within 24 hours of delivery.</li>
                <li>In case of an incorrect item, you may raise a replacement or return request only if</li>
                <li> the item is sealed/ unopened/ unused and in original condition.</li>
            </ul>
            <ul>
                <li><h3>Packaging Type</h3>Pack</li>
            </ul>
            <ul>
                <li><h3>Manufacturer Details</h3>Mother Dairy Fruit & Vegetable Pvt. Ltd., Unit-Motihari, Village-Bathna, PO.-</li>
                <li>Piprakothi, Purbi Champaran, Bihar-845429</li>
            </ul>
            <ul>
                <li><h3>Country of Origin</h3>India</li>
            </ul>
            <ul>
                <li><h3>Customer Care Details</h3>Email: info@blinkit.com</li>
            </ul>
            <ul>
                <li><h3>Seller</h3>KEMEXEL ECOMMERCE PRIVATE LIMITED</li>
            </ul>
            <ul>
                <li><h3>Seller FSSAI</h3>10823999000118</li>
            </ul>
            <ul>
                <li><h3>Disclaimer</h3>Every effort is made to maintain the accuracy of all information. However, actual</li>
                <li>product packaging and materials may contain more and/or different information. It is</li>
                <li>recommended not to solely rely on the information presented.</li>
            </ul>
        </div>
        
      </div>
      <div className={styles.productContainer}>
        <h5>Home / Milk / Mother Dairy Cow Fresh Milk</h5>
      <h2>Mother Dairy Cow Fresh Milk</h2>
      <button className={styles.timebutton}>
      <p className={styles.time}>10 MINS</p>
      </button>
      <button className={styles.viewAllButton}>View all by Mother Dairy</button>
    <div className={styles.out}>
      <div className={styles.productDetails}>
        <p className={styles.volume}>500 ml</p>
        <p className={styles.price}>MRP ₹29</p>
        <p className={styles.Tax}>(Inclusive of all taxes)</p>
      </div>
      <div className={styles.productbutton}>
        <button className={styles.addbutton}>Add</button>
      </div>
      </div>
      <div className={styles.whyShop}>
        <h3>Why shop from blinkit?</h3>
        <ul>
            
          <li><img
                  src={Why1}
                  alt="Mother Dairy Cow Fresh Milk"
                  className={styles.productImagel}
                />Superfast Delivery</li>
          <li><img
                  src={Why2}
                  alt="Mother Dairy Cow Fresh Milk"
                  className={styles.productImagel}
                />Best Prices & Offers</li>
          <li><img
                  src={Why3}
                  alt="Mother Dairy Cow Fresh Milk"
                  className={styles.productImagel}
                />Wide Assortment</li>
        </ul>
      </div>

      
    </div>
      </div>
    
  );
};

export default CardPage;