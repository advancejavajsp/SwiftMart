import { useContext } from "react"
import {Outlet} from "react-router-dom"
import { globalvar } from "../GlobalContext/GlobalContext"
import { Toaster } from "react-hot-toast"
import Login from "../pages/login/Login"
import SignUp from "../pages/Signup/SignUp"
import MyCart from "./MyCart/MyCart"
import PaymentSucessful from "./paymentSuccessful/PaymentSucessful"
import UpdateNotification from "./Notification/UpdateNotification"
import DeleteNotification from "./Notification/DeleteNotification"
import OtpPopup from "../pages/otpPopup/OtpPopup"
const Layout = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel,paymentSuccessful,mycartPanel,updateProductPanel, setUpdateProductPanel,setPaymentSuccessful,deleteProductPanel, setDeleteProductPanel, otpRender, setOtpRender}=useContext(globalvar)

  return (
    <>
    <Toaster/>
    {loginPanel && <Login />}
    {signupPanel && <SignUp/>}
    {mycartPanel && <MyCart/>}
    {updateProductPanel && <UpdateNotification/>}
    {deleteProductPanel && <DeleteNotification/>}
    

   
 
    {paymentSuccessful && <PaymentSucessful/>}
    <Outlet></Outlet>
    </>
  )
}

export default Layout
