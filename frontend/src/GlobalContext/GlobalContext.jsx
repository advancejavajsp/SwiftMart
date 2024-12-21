/* eslint-disable */
import React,{createContext} from 'react'
import { useState } from 'react';

export const globalvar=createContext();
const GlobalContext = ({children}) => {
    let[state,setstate]=useState([]);
    let[loginPanel,setLoginPanel]=useState(false);
    let[signupPanel,setSignuPanel]=useState(false);
  return (
   <globalvar.Provider value={{state,setstate,loginPanel,setLoginPanel,signupPanel,setSignuPanel}}>
    {children}
   </globalvar.Provider>
  )
}

export default GlobalContext
