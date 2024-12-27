import React, { useContext } from 'react';
import style from './productcontainer.module.css';
import Card from '../Card/Card';
import { globalvar } from '../../GlobalContext/GlobalContext';

const ProductContainer = () => {
  let {categoryId, setCategoryId} = useContext(globalvar);
  const truncatedTitle = "Mother Dairy Cow Fresh Milk".length > 50 ? "Mother Dairy Cow Fresh Milk".slice(0, 50) + "..." : "Mother Dairy Cow Fresh Milk";

  return (
    <section className={style["section"]}>
      

      
        <div className={style["dropdown"]}>
            <h4>Buy Paper Online</h4>
        
          <label htmlFor="options">Sort By</label>
          <select id="options" className={style["select"]}>
            <option className={style["style"]}>Relevance</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
            <option value="Discount (High to Low)">Discount (High to Low)</option>
            <option value="Name (A to Z)">Name (A to Z)</option>
          </select>
        </div>
      {/* </div> */}
      <Card/>
    </section>
  );
}

export default ProductContainer;
