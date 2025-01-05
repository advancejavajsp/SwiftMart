import React, { useContext } from 'react';
import style from './search.module.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { globalvar } from '../../GlobalContext/GlobalContext';


const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [products, setProducts] = useState([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [allProducts , setAllProducts] = useState([]);
  const {searchData , setSearchData} = useContext(globalvar);


  // Fetch all products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/open/products/getAll`);
        console.log(response)
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchData) {
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(allProducts); // Show all products if no search data
    }
  }, [searchData, allProducts]);

  console.log(searchData);
  console.log(filteredProducts);
  
  

  return (

    <div className={style['searchpage']}>
      <div className={style["search-info"]}>
        {searchData ? (
          <h5>Showing results for "{searchData}"</h5>
        ) : (
          <h5>All Products</h5>
        )}
      </div>
    <div className={style["show"]}>
          <div className={style["product-grid"]}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={style["product-card"]}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={style["product-image"]}
              />
              <p className={style["product-name"]}>{product.name}</p>
              <p className={style["product-price"]}>₹ {product.price}</p>
            </div>
          ))
        ) : (
          <p className={style["no-results"]}>No products found for "{searchData}"</p>
        )}
      </div>

      </div>

      </div>
  );
};

export default Search;
