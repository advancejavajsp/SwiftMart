import { useContext } from "react"
import {Outlet} from "react-router-dom"
import { globalvar } from "../GlobalContext/GlobalContext"
import { Toaster } from "react-hot-toast"
import Login from "../pages/login/Login"
import SignUp from "../pages/Signup/SignUp"
import MyCart from "./MyCart/MyCart"
import PaymentSucessful from "./paymentSuccessful/PaymentSucessful"
import UpdateNotification from "./notificataion/UpdateNotification"
import DeleteNotification from "./notificataion/DeleteNotification"
import AddProduct from "./admin/addProduct/AddProduct"
import AddCategory from "./admin/addCategory/AddCategory";
import OtpPopup from "../pages/otpPopup/OtpPopup"
import UpdateProduct from "./admin/updateProduct/UpdateProduct"
import Loader from "../pages/loader/Loader"
import OrderDetails from "./OrderDetails/OrderDetails"


const Layout = () => {
  let {loginPanel,signupPanel,paymentSuccessful,mycartPanel,updateProductPanel,addProductPanel, updateProductPopUp,addCategoryPanel,deleteProductPanel, otpRender,loaderPanel,orderdetails}=useContext(globalvar)
  return (
    <>
    <Toaster/>
    {loginPanel && <Login />}
    {signupPanel && <SignUp/>}
    {mycartPanel && <MyCart/>}
    {updateProductPanel && <UpdateNotification/>}
    {deleteProductPanel && <DeleteNotification/>}
    {addProductPanel && <AddProduct/>}
    {paymentSuccessful && <PaymentSucessful/>}
    {addCategoryPanel && <AddCategory/>}
    {updateProductPopUp && <UpdateProduct/>}
    {loaderPanel && <Loader/>}
    {/* {orderdetails && <OrderDetails/>} */}
    <Outlet></Outlet>
    </>
  )
}

export default Layout
