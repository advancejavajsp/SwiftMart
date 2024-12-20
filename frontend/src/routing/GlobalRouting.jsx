import {createBrowserRouter} from "react-router-dom";
import Layout from "../Component/Layout";
import HomePage from "../Component/HomePage/HomePage";
import ErrorPage from "../Component/PageNotFound/ErrorPage";
import About from "../Component/about/About";
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
              path:"/about",
              element:<About />
             }
            ]
        }
      ]
    },   {
        path:"*",
        element:<ErrorPage/>
    },
])