import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "../Navbar/MainNavBar";
import NavBar1 from "../navbar1/MainNavBar1";
import SideBar from "../sidebar/SideBar";
import ProductContainer from "../Productcontainer/ProductContainer";
import style from "../HomePage/HomePage.module.css"
import { globalvar } from "../../GlobalContext/GlobalContext";
import AdminNav from "../admin/adminNav/AdminNav";

const HomePage = () => {
  let {user}=useContext(globalvar)
  return (
    <>

      <MainNavBar />
      {user.role == "admin" ? <AdminNav/> :  <NavBar1/>}
      <section className={style["homechilds"]}>
        <SideBar/>
       <ProductContainer/>
  
      </section>
      
    </>
  );
};

export default HomePage;
