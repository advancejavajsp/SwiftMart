import React, { useContext, useEffect } from 'react';
import style from './productcontainer.module.css';
import Card from '../Card/Card';
import { globalvar } from '../../GlobalContext/GlobalContext';

const ProductContainer = () => {
   let {product, setProducts}=useContext(globalvar)
  const truncatedTitle = "Mother Dairy Cow Fresh Milk".length > 50 ? "Mother Dairy Cow Fresh Milk".slice(0, 50) + "..." : "Mother Dairy Cow Fresh Milk";

  useEffect(()=>{},[])
  return (
    <section className={style["section"]}>
      <article className={style["heading"]}>
      <h4 className={style['head']}>Buy Paper Online</h4>
      
        <div className={style["dropdown"]}>
           
        
          <label htmlFor="options">Sort By</label>
          <select id="options" className={style["select"]}>
            <option className={style["style"]}>Relevance</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
            <option value="Discount (High to Low)">Discount (High to Low)</option>
            <option value="Name (A to Z)">Name (A to Z)</option>
          </select>
        </div>
        </article>
       <div className={style["cards"]}>
       <Card/>
       </div>
     
    </section>
  );
}

export default ProductContainer;
