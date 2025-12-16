import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home.Jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Package from "./pages/Package/Package.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from "./pages/Error/Error.jsx";
import Packages from "./pages/Packages/Packages.Jsx";

function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/package/:package_id" element={<Package />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Myroutes;
