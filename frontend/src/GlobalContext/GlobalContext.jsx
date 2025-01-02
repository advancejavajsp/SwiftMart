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
  let [paymentSuccessful, setPaymentSuccessful] = useState(false);
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
  let [cartProducts , setCartProducts] = useState([]);
  let [loaderPanel , setLoaderPanel] = useState(false);
  let [userDetail, setUserDetail] = useState({});


  

 

  let getAllcategory = async () => {
    setLoaderPanel(true);
    let response = await axios.get("http://localhost:8080/open/category/categoryall");
    setAllCategory(response.data);
    setLoaderPanel(false);
    setCategoryId(response.data[0].categoryId)

  }

  let fetchProductByCategory =async (categoryId) => {
    // console.log(categoryId)
    setLoaderPanel(true);
    let response =await axios.get(`http://localhost:8080/open/category/${categoryId}`);
    setProducts(response.data)
    setLoaderPanel(false);
  }

let getUserDataFromToken=()=>{
  let token=localStorage.getItem("token"); 
const decoded = token && jwtDecode(token);
 setUser(decoded)

}

let getCartProducts = async()=>{
if (user) {
  let response = await axios.get(`http://localhost:8080/open/cart/find/${user.userId}`);
  console.log(response);
  setCartProducts(response?.data);
}else{
  setCartProducts([])
}
  
}

  let userData=async(userId)=>{
    
    let response = await axios.get(`http://localhost:8080/open/swiftmart/email/${userId}`);
    console.log(response);
    setUserDetail(response.data);
  }
  useEffect(() => {

    let token = localStorage.getItem("token");
    const decoded = token && jwtDecode(token);
    
    setUser(decoded)
    getAllcategory()
   
  }, [refreshId])

  useEffect(()=>{
    fetchProductByCategory(categoryId);
    getCartProducts();
  },[categoryId, refreshId])
  return (
    <globalvar.Provider value={{ userData,user, setUser, loginPanel, setLoginPanel,accounts,setAccounts, signupPanel, setSignuPanel, product, setProducts, productCategory, setProductsCategory, updateProductPanel, setUpdateProductPanel, mycartPanel, setMycartPanel, getUserDataFromToken, deleteProductPanel, setDeleteProductPanel, addProductPanel, setAddProductPanel, addCategoryPanel, setAddCategoryPanel, allCategory, otpRender, setOtpRender, categoryId, setCategoryId, fetchProductByCategory, productComp, setProductComp,updateProductPopUp, setUpdateProductPopUp, refreshId, setRefreshId,getCartProducts,cartProducts , setCartProducts,loaderPanel , setLoaderPanel,userDetail, setUserDetail, paymentSuccessful, setPaymentSuccessful }}>
      {children}
    </globalvar.Provider>
  );
}

export default GlobalContext
