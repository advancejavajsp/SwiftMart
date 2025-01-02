import React, { useContext, useState } from 'react';
import style from './productcontainer.module.css';
import Card from '../Card/Card';
import { globalvar } from '../../GlobalContext/GlobalContext';

const ProductContainer = () => {
  const { product, cartProducts } = useContext(globalvar);
  const [sortOption, setSortOption] = useState("Relevance");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filtered/Sorted products
  const sortedProducts = React.useMemo(() => {
    if (!product?.products) return [];

    const productsCopy = [...product.products];
    switch (sortOption) {
      case "Price (Low to High)":
        return productsCopy.sort((a, b) => a.price - b.price);
      case "Price (High to Low)":
        return productsCopy.sort((a, b) => b.price - a.price);
      case "Name (A to Z)":
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
        case "Name (Z to A)":
          return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productsCopy; // Relevance or Default
    }
  }, [product?.products, sortOption]);

  return (
    <section className={style["section"]}>
      {/* Dropdown for Sorting */}
      <div className={style["dropdown"]}>
        <h4>Buy {product?.name || "Products"} Online</h4>
        <div className={style["dropDownCont"]}>
          <label htmlFor="options">Sort By</label>
          <select id="options" className={style["select"]} value={sortOption}  onChange={handleSortChange}>
            <option className={style["style"]}>Relevance</option>
            <option value="Price (High to Low)">Price (High to Low)</option>
            <option value="Price (Low to High)">Price (Low to High)</option>
            <option value="Name (A to Z)">Name (A to Z)</option>
            <option value="Name (Z to A)">Name (Z to A)</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className={style["cardContainer"]}>
        {product?.products?.length > 0 ? (
         (sortedProducts || product.products) .map((ele) => {
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
