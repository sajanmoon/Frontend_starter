import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      {/* To load the childer of Body route
       we will use outlet method  */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
