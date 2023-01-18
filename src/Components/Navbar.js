import React from "react";
import { Link, NavLink } from "react-router-dom";
// import AboutUs from "../Pages/AboutUs";
// import Contact from "../Pages/Contact";
// import Home from "../Pages/Home";
// import Products from "../Pages/Products";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div class="navbar-header page-scroll">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink class="navbar-brand" to="/">
          ShoppingMart
          </NavLink>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className="page-scroll">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="page-scroll">
              <NavLink to="/product">product</NavLink>
            </li>
            <li className="page-scroll">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="page-scroll">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
