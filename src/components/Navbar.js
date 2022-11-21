import React from "react";
import { Link, Outlet } from " react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" >
        Home
      </Link>
      <Link to="/about" >
        Home
      </Link>
      <Link to="/products">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
