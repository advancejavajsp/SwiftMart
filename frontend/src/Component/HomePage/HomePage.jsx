import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import MainNavBar from "../Navbar/MainNavBar";
import NavBar1 from "../navbar1/MainNavBar1";
import SideBar from "../sidebar/SideBar";
import { globalvar } from "../../GlobalContext/GlobalContext";
import Login from "../../pages/login/Login";

const HomePage = () => {
  return (
    <>

      <MainNavBar />
      <NavBar1/>
      <section>
        <SideBar/>
        <div className="homeChilds">
        <Outlet />
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
