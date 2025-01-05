import React, { useState, useEffect, useContext } from 'react';
import styles from './CardPage.module.css';
import { globalvar } from '../../GlobalContext/GlobalContext';

// Image imports
import Milk from "../../asset/Milk.avif";
import Why1 from "../../asset/Why1.avif";
import Why2 from "../../asset/Why2.avif";
import Why3 from "../../asset/Why3.avif";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const CardPage = ({ product, cardProductQuantity }) => {

  let {state}=useLocation()
  console.log(state)
  let [prodData, setProdData] = useState({});

  
  
  const [isTextListVisible, setIsTextListVisible] = useState(window.innerWidth >= 1000);




  console.log(prodData);
  
  

  const whyShopFromBlinkit = [
    {
      image: Why1,
      title: "Superfast Delivery",
      description: "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    },
    {
      image: Why2,
      title: "Best Prices & Offers",
      description: "Best price destination with offers directly from manufacturers.",
    },
    {
      image: Why3,
      title: "Wide Assortment",
      description: "Choose from 5000+ products across food, personal care, household & other categories.",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsTextListVisible(window.innerWidth >= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
    <div className={styles.container}>
    <div className={styles.imageSection}>
      <img 
        src={state?.imageUrl || Milk}
        alt=""
        className={styles.productImage} 
      />
      
     
        <div className={styles.textlist}>
          <h1>Product Details</h1>
          <ul>
            <li><h3>{state.name}</h3></li>
          </ul>
          <ul>
            <li><h3>Key Features</h3></li>
            <li>{state.description}</li>
            
          </ul>
          <ul>
            <li><h3>Unit</h3>{product?.quantityAvailable}</li>
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
      <h5>Home / {state.name}</h5>
      <h2>{state.name}</h2>  
      <div className={styles.out}>
        <div className={styles.productDetails}>
          <p className={styles.volume}>{state.quantityAvailable}</p>
          <p className={styles.price}>{state.price}</p>
          <p className={styles.Tax}>(Inclusive of all taxes)</p>
        </div>
    
      </div>
      <div className={styles.whyShop}>
        <h3>Why shop from blinkit?</h3>
        <ul>
          <li className={styles.newli}>
            <div className={styles.new}>
              <img src={Why1} alt="Mother Dairy Cow Fresh Milk" className={styles.productImagel} />
            </div>
            <div className={styles.new2}>
              <h4>Superfast Delivery</h4>
              <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
            </div>
          </li>
          <li className={styles.newli}>
            <div className={styles.new}>
              <img src={Why2} alt="Mother Dairy Cow Fresh Milk" className={styles.productImagel} />
            </div>
            <div className={styles.new2}>
              <h4>Best Prices & Offers</h4>
              <p>Best price destination with offers directly from manufacturers.</p>
            </div>
          </li>
          <li className={styles.newli}>
            <div className={styles.new}>
              <img src={Why3} alt="Mother Dairy Cow Fresh Milk" className={styles.productImagel} />
            </div>
            <div className={styles.new2}>
              <h4>Wide Assortment</h4>
              <p>Choose from 5000+ products across food, personal care, household & other categories.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <Footer/>
  </div>
  
);
  
};

export default CardPage;
