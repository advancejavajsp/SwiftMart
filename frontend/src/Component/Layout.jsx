import { useContext } from "react"
import {Outlet} from "react-router-dom"
import { globalvar } from "../GlobalContext/GlobalContext"
import { Toaster } from "react-hot-toast"
import Login from "../pages/login/Login"
import SignUp from "../pages/Signup/SignUp"
const Layout = () => {
  let {loginPanel,setLoginPanel,signupPanel,setSignuPanel }=useContext(globalvar)

  return (
    <>
    {loginPanel && <Login />}
    {signupPanel && <SignUp/>}
    <Outlet></Outlet>
    </>
  )
}

export default Layout
