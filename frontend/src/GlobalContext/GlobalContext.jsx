
import axios from 'axios';
import React, { createContext, useEffect } from 'react'
import { useState } from 'react';

export const globalvar = createContext();

const GlobalContext = ({ children }) => {
  let [user, setUser] = useState([]);
  let [loginPanel, setLoginPanel] = useState(false);
  let [signupPanel, setSignuPanel] = useState(false);
  let [product, setProducts] = useState([]); 
  let [productCategory, setProductsCategory] = useState([]); 
  let [updateProductPanel, setUpdateProductPanel] = useState([]); 

  let allcategory;  

  
  const fetchCategories = async () => {
    try {
      const response = await axios.get(''); 
      allcategory = response.data;  

      
      setProductsCategory(allcategory); 
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  
  let fetchdataByCategory = (id) => {
    axios.get(``)  
      .then(response => {
        setProducts(response.data);  
      })
      .catch(error => {
        console.error("Error fetching products for category:", error);
      });
  };

  
  useEffect(() => {
    fetchCategories();  

    let user = localStorage.getItem("token"); 
    
    // console.log(user);
    // setUser(decodedUser);
  }, []); 

  return (
    <globalvar.Provider value={{
      user,
      setUser,
      loginPanel,
      setLoginPanel,
      signupPanel,
      setSignuPanel,
      product,
      setProducts,
      productCategory,
      setProductsCategory,
      updateProductPanel,
      setUpdateProductPanel,
      fetchdataByCategory  
    }}>
      {children}
    </globalvar.Provider>
  );
};

export default GlobalContext;
