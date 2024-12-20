import React, { useState } from 'react';
import style from './adminNav.module.css';

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className={style["adminNav"]}>
      <div className={style["logo"]}>
       
      </div>

     
      <div className={style["hamburger"]} onClick={toggleMenu}>
        <div className={style["bar"]}></div>
        <div className={style["bar"]}></div>
        <div className={style["bar"]}></div>
      </div>

     
      <ul className={`${style["adminNav1"]} ${isMenuOpen ? style["open"] : ''}`}>
        <li><a href="">Home</a></li>
        <li><a href="">Add Product</a></li>
        <li><a href="">Add Category</a></li>
        <li><a href="">All Orders</a></li>
        <li><a href="">Delivery</a></li>
        <li><a href="">Payments</a></li>
      </ul>
    </div>
  );
};

export default AdminNav;
