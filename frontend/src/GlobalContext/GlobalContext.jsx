/* eslint-disable */
import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


export const globalvar = createContext();

const GlobalContext = ({ children }) => {
  let [user, setUser] = useState("");
  let [loginPanel, setLoginPanel] = useState(false);
  let [signupPanel, setSignuPanel] = useState(false);
  let [mycartPanel, setMycartPanel] = useState(false)
  let [paymentSuccessful, setPaymentSuccessful] = useState(false)
  let [product, setProducts] = useState([]);
  let [productCategory, setProductsCategory] = useState([]);
  let [updateProductPanel, setUpdateProductPanel] = useState(false);
  let [updateProductPopUp, setUpdateProductPopUp] = useState(false);
  let [deleteProductPanel, setDeleteProductPanel] = useState(false);
  let [addProductPanel, setAddProductPanel] = useState(false);
  let [addCategoryPanel, setAddCategoryPanel] = useState(false);
  let [allCategory, setAllCategory] = useState([]);
  let [otpRender, setOtpRender] = useState(false);
  let [categoryId, setCategoryId] = useState("");
  let [accounts, setAccounts] = useState(false);
  let [productComp, setProductComp ] = useState({productId: "", name:""});
  let [refreshId, setRefreshId] = useState(0);

  let allcategory;  

  let getAllcategory = async () => {
    let response = await axios.get("http://localhost:8080/open/category/categoryall");
    console.log(response)
    setAllCategory(response.data);
    setCategoryId(response.data[0].categoryId)

  }

  let fetchProductByCategory =async (categoryId) => {
    // console.log(categoryId)
    let response =await axios.get(`http://localhost:8080/open/category/${categoryId}`);
    setProducts(response.data)
  }

let getUserDataFromToken=()=>{
  let token=localStorage.getItem("token"); 
console.log(token);
const decoded = token && jwtDecode(token);
console.log(decoded)
 setUser(decoded)

}
  useEffect(() => {

    let token = localStorage.getItem("token");
    const decoded = token && jwtDecode(token);
    setUser(decoded)
    getAllcategory()
  }, [refreshId])

  useEffect(()=>{
    fetchProductByCategory(categoryId)
  },[categoryId, refreshId])
  return (
    <globalvar.Provider value={{ user, setUser, loginPanel, setLoginPanel,accounts,setAccounts, signupPanel, setSignuPanel, product, setProducts, productCategory, setProductsCategory, updateProductPanel, setUpdateProductPanel, mycartPanel, setMycartPanel, getUserDataFromToken, deleteProductPanel, setDeleteProductPanel, addProductPanel, setAddProductPanel, addCategoryPanel, setAddCategoryPanel, allCategory, otpRender, setOtpRender, categoryId, setCategoryId, fetchProductByCategory, productComp, setProductComp,updateProductPopUp, setUpdateProductPopUp, refreshId, setRefreshId }}>
      {children}
    </globalvar.Provider>
  );
}

export default GlobalContext
