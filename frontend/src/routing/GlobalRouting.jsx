
import { createBrowserRouter } from "react-router-dom";
import About from "../Component/about/About";
import Status from "../Component/Delivery/Status";
import HomePage from "../Component/HomePage/HomePage";
import Layout from "../Component/Layout";
import Payment from "../Component/payment/Payment";
import PaymentSucessful from "../Component/paymentSuccessful/PaymentSucessful";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import Card from "../Component/Card/Card";
import MyCart from "../Component/MyCart/MyCart";
export const globalRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/homePage",
        element: <HomePage />,
        children: [
          {
            path: "/homePage/Status",
            element: <Status />,
          },
          {
            path: "/homePage/Payment",
            element: <Payment />,
          },
          {
            path: "/homePage/PaymentSucessful",
            element: <PaymentSucessful />,
          },
          {
            path:"/homePage/about",
            element:<About/>
          },
          {
            path:"/homePage/card",
            element:<Card/>
          },
          {
            path:"/homePage/cart",
            element:<MyCart/>
          },
          {
            path:"/homePage/about",
            element:<About/>
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
