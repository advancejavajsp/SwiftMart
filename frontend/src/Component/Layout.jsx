import {Outlet} from "react-router-dom"
import Toaster from 'react-hot-toast'
const Layout = () => {
  return (
    <>
  <Toaster></Toaster>
    <Outlet></Outlet>
    </>
    
  )
}

export default Layout
