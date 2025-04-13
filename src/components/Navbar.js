import "bootstrap/dist/css/bootstrap.min.css";
import logoicon from "../images/ChatGPT_Image_Apr_2__2025__07_06_54_PM-removebg-preview.png";
import {  FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const closeMenu = () => setIsNavVisible(false);
  return (
    <header className="header">

    <img src={logoicon} alt="" className="logo" />

    <nav className={`navbar ${isNavVisible ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
        <Link to="about" smooth={true} duration={500} className="nav-link">About</Link>
        <Link to="education" smooth={true} duration={500} className="nav-link">Education</Link>
        <Link to="services" smooth={true} duration={500} className="nav-link">services</Link>
        <Link to="skill" smooth={true} duration={500} className="nav-link">Skill</Link>
        <Link to="portfolio" smooth={true} duration={500} className="nav-link">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
        
    </nav>
    <button
        className={`nav-toggle ${isNavVisible ? "open" : ""}`}
        onClick={() => setIsNavVisible(!isNavVisible)}
    >
        {isNavVisible ? <FaTimes /> : <FaBars />}
    </button>
</header>
  );
}

export default Navbar;