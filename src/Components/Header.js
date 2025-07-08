// Header component for the website
import React from 'react';
import { Link } from "react-router-dom";
import "./home.css";

const Header = () =>(
    <nav className="nav-bar">
    <div className="logo">
      <img src="Images/logo.png" alt="Logo" />
    </div>
    <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/contactus">Contact Us</Link>
    <Link to="/blogs">Blogs</Link>
    </div>
    <div className="auth">
      <a href="signup.html" className="signup">Sign Up</a>
      <a href="login.html" className="login">Login</a>
    </div>
  </nav>
);

export default Header;
