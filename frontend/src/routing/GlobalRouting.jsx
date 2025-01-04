import { createBrowserRouter } from "react-router-dom";
import About from "../Component/about/About";
import Status from "../Component/Delivery/Status";
// import HomePage from "../Component/homePage/homePage";//
import Layout from "../Component/Layout";
import Payment from "../Component/payment/Payment";
import PaymentSucessful from "../Component/paymentSuccessful/PaymentSucessful";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import Card from "../Component/Card/Card";
import MyCart from "../Component/MyCart/MyCart";
import CardPage from "../Component/CardPage/CardPage";
import Pending from "../Component/DeliveryAgent/Pending";
import Active from "../Component/DeliveryAgent/Active";
import Completed from "../Component/DeliveryAgent/Completed";
import DeliveryAgent from "../Component/DeliveryAgent/DeliveryAgent";
import OrderDetails from "../Component/OrderDetails/OrderDetails";
import Order from "../Component/Orders/Order";
import PaymentDetails from "../Component/PaymentDetails/PaymentDetails";
import Payments from "../Component/Payments/Payments";
import UserProfile from "../Component/UserProfile/UserProfile";
import Sidebar from "../Component/sidebar/SideBar";
import Footer from "../Component/Footer/Footer";
import Search from "../Component/search/Search";
import ProductContainer from "../Component/Productcontainer/ProductContainer";
import Navbar1 from "../Component/navbar1/MainNavBar1";
import MainNavBar from "../Component/Navbar/MainNavBar";
import AdminNav from "../Component/admin/adminNav/AdminNav";
import AddCategory from "../Component/admin/addCategory/AddCategory";
import AddProduct from "../Component/admin/addProduct/AddProduct";
import UpdateProduct from "../Component/admin/updateProduct/UpdateProduct";
import AboutNav from "../Component/aboutnavbar/AboutNav";
import Login from "../pages/login/Login";
import NavBar from "../Component/Navbar/MainNavBar";
import HomePage from "../Component/HomePage/HomePage";
import SignUp from "../pages/Signup/SignUp";
import UpdateNotification from "../Component/notificataion/UpdateNotification";
import DeleteNotification from "../Component/notificataion/DeleteNotification";
import EditProfile from "../Component/editProfile/EditProfile";
import HomeDefault from "../Component/HomeDefault/HomeDefault";
import Address from "../Component/address/Address";
export const globalRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <HomeDefault />,
          },
          {
            path: "/Paymentss",
            element: <Payments />,
          },
          {
            path: "/orders",
            element: <Order />,
          },
          {
            path: "/payments",
            element: <Order />,
          },
          {
            path: "/PaymentDetails",
            element: <PaymentDetails />,
          },
  
          {
            path: "/homePage/productcontainer",
            element: <ProductContainer />
          },
          
        ],
      },
      {
        path: '/Payment',
        element: <Payment />
      },
    ],
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cardpage",
    element: <CardPage />,
  },

  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
