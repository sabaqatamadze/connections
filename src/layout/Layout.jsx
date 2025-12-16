import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";


function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;