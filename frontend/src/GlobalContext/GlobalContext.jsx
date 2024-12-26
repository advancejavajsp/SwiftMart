/* eslint-disable */
import React,{createContext, useEffect} from 'react'
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";


export const globalvar = createContext();
const GlobalContext = ({ children }) => {
  let [user, setUser] = useState("");
  let [loginPanel, setLoginPanel] = useState(false);
  let [signupPanel, setSignuPanel] = useState(false);
  let [mycartPanel,setMycartPanel] = useState(false)
  let [paymentSuccessful,setPaymentSuccessful] = useState(false)
  let [product, setProducts] = useState([]);
  let [productCategory, setProductsCategory] = useState([]);
  let [updateProductPanel, setUpdateProductPanel] = useState([]);


let allcategory=()=>{

}

let fetchdataByCategory=(id)=>{
  // fetch the data by category and store that data inside product state
   let response=axios.get("");
   setProducts(response)
}

let getUserDataFromToken=(token)=>{
  const decoded = jwtDecode(token);
  console.log(decoded)
   setUser(decoded)
}

useEffect(()=>{

let user=localStorage.getItem("token");
console.log(user)
//here decode the token and then store the role inmside user state
//  console.log(user);
//  setUser({
//   userName:"Manav",
//   email:"manav123@gmail.com",
//   role:"user"
//  })
},[])
  return (
    <globalvar.Provider value={{ user, setUser, loginPanel, setLoginPanel, signupPanel, setSignuPanel, product, setProducts, productCategory, setProductsCategory,updateProductPanel, setUpdateProductPanel,mycartPanel,setMycartPanel,getUserDataFromToken }}>
      {children}
    </globalvar.Provider>
  )
}

export default GlobalContext
