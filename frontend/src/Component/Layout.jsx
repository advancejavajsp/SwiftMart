import { useContext } from "react"
import {Outlet} from "react-router-dom"
import { globalvar } from "../GlobalContext/GlobalContext"
import { Toaster } from "react-hot-toast"
import Login from "../pages/login/Login"
import SignUp from "../pages/Signup/SignUp"
import MyCart from "./MyCart/MyCart"
import PaymentSucessful from "./paymentSuccessful/PaymentSucessful"
const Layout = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel,mycartPanel,setMycartPanel,paymentSuccessful,setPaymentSuccessful}=useContext(globalvar)

  return (
    <>
    {loginPanel && <Login />}
    {signupPanel && <SignUp/>}
    {mycartPanel && <MyCart/>}
 
    {paymentSuccessful && <PaymentSucessful/>}
    <Outlet></Outlet>
    </>
  )
}

export default Layout
