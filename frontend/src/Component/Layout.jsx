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
import MainNavBar from "./Navbar/MainNavBar"
import UserProfile from "./UserProfile/UserProfile"
import EditProfile from "./editProfile/EditProfile"
import OrderDetails from "./OrderDetails/OrderDetails"
import Address from "../Component/address/Address"
import Search from "./search/Search"
import PaymentDetails from "./PaymentDetails/PaymentDetails"

const Layout = () => {
  let {addressPanel,setaddressPanel,orderdetailsPanel,setOrderdetailsPanel,loginPanel,setLoginPanel,signupPanel,setSignuPanel,paymentSuccessful,mycartPanel,updateProductPanel,addProductPanel, updateProductPopUp,addCategoryPanel,setUpdateProductPanel,setPaymentSuccessful,deleteProductPanel, setDeleteProductPanel, otpRender, setOtpRender,loaderPanel ,userProfilePanel,editProfile,searchPanel , setsearchPanel,paymentdetailsPanel,setPaymentdetailsPanel }=useContext(globalvar)
  return (
    <>
    <Toaster/>
    {loginPanel && <Login />}
    {signupPanel && <SignUp/>}
    {mycartPanel && <MyCart/>}
    {updateProductPanel && <UpdateNotification/>}
    {deleteProductPanel && <DeleteNotification/>}
    {addProductPanel && <AddProduct/>}
    {paymentdetailsPanel?.visibility && <PaymentDetails/>}
    {paymentSuccessful && <PaymentSucessful/>}
    {addCategoryPanel && <AddCategory/>}
    {updateProductPopUp && <UpdateProduct/>}
    {loaderPanel && <Loader/>}
    {addressPanel && <Address/>}
    {userProfilePanel && <UserProfile/>}
    {editProfile && <EditProfile/>}
    {searchPanel && <Search/>}
    {orderdetailsPanel?.visibility && <OrderDetails/>}
    <Outlet></Outlet>
    </>
  )
}

export default Layout
