import {createBrowserRouter} from "react-router-dom";
import Layout from "../Component/Layout";
import HomePage from "../Component/HomePage/HomePage";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
export const globalRoute=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            path:"/homePage",
            element:<HomePage/>,
            children:[
             
            ]
        }
      ]
    },   {
        path:"*",
        element:<ErrorPage/>
    },
])