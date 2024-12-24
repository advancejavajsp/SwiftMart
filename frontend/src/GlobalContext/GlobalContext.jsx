/* eslint-disable */
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


let allcategory

let fetchdataByCategory=(id)=>{
  // fetch the data by category and store that data inside product state
   let response=axios.get("");
   setProducts(response)
}

useEffect(()=>{
let user=localStorage.getItem("token");
//here decode the token and then store the role inmside user state
//  console.log(user);
//  setUser()
},[])
  return (
    <globalvar.Provider value={{ user, setUser, loginPanel, setLoginPanel, signupPanel, setSignuPanel, product, setProducts, productCategory, setProductsCategory,updateProductPanel, setUpdateProductPanel }}>
      {children}
    </globalvar.Provider>
  )
}

export default GlobalContext
