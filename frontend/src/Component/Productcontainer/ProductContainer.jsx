import React, { useContext } from 'react';
import style from './productcontainer.module.css';
import Card from '../Card/Card';
import { globalvar } from '../../GlobalContext/GlobalContext';

const ProductContainer = () => {
  let {product} = useContext(globalvar);
  const truncatedTitle = "Mother Dairy Cow Fresh Milk".length > 50 ? "Mother Dairy Cow Fresh Milk".slice(0, 50) + "..." : "Mother Dairy Cow Fresh Milk";

  return (
    <section className={style["section"]}>
      <div className={style["dropdown"]}>
        <h4>Buy {product.name} Online</h4>
        <div className={style["bropDownCont"]}>
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
       <div className={style["cardContainer"]}>
       {product?.products?.map((ele,i)=>{
                  return <Card product={ele}/>
                })}
       </div>
   
    
    </section>
  );
}

export default ProductContainer;
