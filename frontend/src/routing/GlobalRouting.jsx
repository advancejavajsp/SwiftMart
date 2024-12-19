import {createBrowserRouter} from "react-router-dom";
import Layout from "../Component/Layout";
import HomePage from "../Component/HomePage/HomePage";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import Orders from '../Orders/Order';
import OrderDetails from "../OrderDetails/OrderDetails";
import Payments from "../Payments/Payments";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
export const globalRoute=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            path:"/homePage",
            element:<HomePage/>,
            children:[
             {
              path: "/orderPage",
              element : <Orders/>
             },
             {
              path:"/orderdetailsPage",
              element : <OrderDetails/>
             },
             {
              path:"/payments",
              element : <Payments/>  

             },
             {
              path:"/paymentdetailsPage",
              element:<PaymentDetails/>
             }
            ]
        }
      ]
    },   {
        path:"*",
        element:<ErrorPage/>
    },
])