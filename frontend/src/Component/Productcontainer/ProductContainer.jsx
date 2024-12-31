import React, { useContext } from 'react';
import style from './productcontainer.module.css';
import Card from '../Card/Card';
import { globalvar } from '../../GlobalContext/GlobalContext';

const ProductContainer = () => {
  const { product, cartProducts } = useContext(globalvar);

console.log(cartProducts)
  return (
    <section className={style["section"]}>
      {/* Dropdown for Sorting */}
      <div className={style["dropdown"]}>
        <h4>Buy {product?.name || "Products"} Online</h4>
        <div className={style["dropDownCont"]}>
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

      {/* Product Cards */}
      <div className={style["cardContainer"]}>
        {console.log(product.products)}
        {product?.products?.length > 0 ? (
          product.products.map((ele) => {
            // Find quantity in cartProducts for the current product
            const cartProduct = cartProducts?.product?.find(
              (item) => item?.product?.productId === ele.productId
            );
            const quantity = cartProduct?.quantity || 0;

            return (
              <Card
                key={ele.productId}
                product={ele}
                cardProductQuantity={quantity}
              />
            );
          })
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
};

export default ProductContainer;
