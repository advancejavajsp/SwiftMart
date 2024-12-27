import React, { useContext, useState } from 'react';
import style from './adminNav.module.css';
import { globalvar } from '../../../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';


const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {addProductPanel, setAddProductPanel,addCategoryPanel, setAddCategoryPanel} = useContext(globalvar);

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
        <Link to="/order"><li>All Orders</li></Link>
        <li>Delivery</li>
        <li>Payments</li>
      </ul>
    </div>
  );
};

export default AdminNav;
