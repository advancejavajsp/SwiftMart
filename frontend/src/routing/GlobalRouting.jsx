import {createBrowserRouter} from "react-router-dom";
import Layout from "../Component/Layout";
import HomePage from "../Component/HomePage/HomePage";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import Navbar from "../Component/Navbar/Navbar.jsx";

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
                path:"/navbar",
                element:<Navbar/>
            },
            
             
            ]
        }
      ]
    },   {
        path:"*",
        element:<ErrorPage/>
    },
])