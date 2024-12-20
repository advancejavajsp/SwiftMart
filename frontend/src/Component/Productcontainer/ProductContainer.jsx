import React from 'react';
import style from './productcontainer.module.css';

const ProductContainer = () => {
  return (
    <section className={style["section"]}>
      <h4>Buy Paper Online</h4>

      <div className={style["dropdown"]}>
        <div>
          <label htmlFor="options">Sort By</label>
          <select id="options" className={style["select"]}>
            <option className={style["style"]}>Relevance</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
            <option value="Discount (High to Low)">Discount (High to Low)</option>
            <option value="Name (A to Z)">Name (A to Z)</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default ProductContainer;
