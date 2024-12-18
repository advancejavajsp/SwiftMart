/* eslint-disable */
import React,{createContext} from 'react'
import { useState } from 'react';

const globalvar=createContext();
const GlobalContext = ({children}) => {
    let[state,setstate]=useState([]);
  return (
   <globalvar.Provider value={{state,setstate}}>
    {children}
   </globalvar.Provider>
  )
}

export default GlobalContext
