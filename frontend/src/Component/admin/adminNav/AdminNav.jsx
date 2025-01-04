import React, { useContext, useState } from 'react';
import style from './adminNav.module.css';
import { globalvar } from '../../../GlobalContext/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';


const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {addProductPanel, setAddProductPanel,addCategoryPanel, setAddCategoryPanel} = useContext(globalvar);

  let navigate = useNavigate();

  let getOrderAndPayments = (url,endPoint)=>{
  navigate(url,{state:endPoint})

  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style["adminNav"]}>
      <div className={style["hamburger"]} onClick={toggleMenu}>
        <div className={style["bar"]}></div>
        <div className={style["bar"]}></div>
        <div className={style["bar"]}></div>
      </div>


      <ul className={`${style["adminNav1"]} ${isMenuOpen ? style["open"] : ''}`}>
        <Link><li>Home</li></Link>
        <li onClick={() => setAddProductPanel(!addProductPanel)}>Add Product</li>
        <li onClick={() => setAddCategoryPanel(!addCategoryPanel)}>Add Category</li>
        <li onClick={()=>{getOrderAndPayments("/orders","get")}}>All Orders</li>
        <li onClick={()=>{getOrderAndPayments("/payments","payments")}}>All Payments</li>
        <li>Delivery</li>
        
      </ul>
    </div>
  );
};

export default AdminNav;
