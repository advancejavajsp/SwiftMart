import { useContext } from "react"
import {Outlet} from "react-router-dom"
import { globalvar } from "../GlobalContext/GlobalContext"
import { Toaster } from "react-hot-toast"
const Layout = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel }=useContext(globalvar)

  return (
   
    
    <Outlet></Outlet>
  )
}

export default Layout
