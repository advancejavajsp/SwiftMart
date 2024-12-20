import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout";
import HomePage from "../Component/HomePage/HomePage";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import Status from "../Component/Delivery/Status";
import Payment from "../Component/payment/Payment";
import PaymentSucessful from "../Component/paymentSuccessful/PaymentSucessful";
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
            path: "/Status",
            element: <Status />,
          },
          {
            path: "/Payment",
            element: <Payment />,
          },
          {
            path: "/PaymentSucessful",
            element: <PaymentSucessful />,
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
