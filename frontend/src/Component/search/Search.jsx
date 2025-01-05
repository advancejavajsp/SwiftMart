import React, { useContext } from 'react';
import style from './search.module.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { globalvar } from '../../GlobalContext/GlobalContext';
import Card from '../Card/Card';


const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [products, setProducts] = useState([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [allProducts , setAllProducts] = useState([]);
  const {searchData , setSearchData,user,loaderPanel , setLoaderPanel,setRefreshId,refreshId,cartProducts} = useContext(globalvar);
   const [quantity, setQuantity] = useState(0);




  // Fetch all products when the component mounts
  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        setLoaderPanel(true);
        const response = await axios.get(`http://localhost:8080/open/products/getAll`);
       
        setAllProducts(response.data);
        setLoaderPanel(false);
      } catch (error) {
        setLoaderPanel(false);
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

  
  

  return (

    <div className={style['searchpage']}>
      <div className={style["search-info"]}>
        {searchData ? (
          <h5>Showing results for "{searchData}"</h5>
        ) : (
          <h5>All Products</h5>
        )}
      </div>
      <div className={style["cardContainer"]}>
        {allProducts?.length > 0 ? (
          (filteredProducts ||allProducts).map((ele) => {
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

      </div>
  );
};

export default Search;
