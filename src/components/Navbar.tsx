import React, { useState } from 'react';
import '../styles/global.css';
import logo from "../../public/images/impvestLogo.svg";
import { Link, useLocation } from "react-router-dom";
import NavbarDropdownBox from "./NavbarDropBox";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const location = window.location.pathname;

  return (
    <nav className="navbar" style={{display:'flex',height:'69px', width:'screen', padding:'10px 20px',alignItems:'center'}}>

        <img
          src={logo}
          alt="Impvest"
          style={{ height: '33px' }}
        />
        <div style={{height:'max',flexDirection:'column',width:'40px',marginLeft: "auto", display:"flex",gap:'7px'}} onClick={toggleDropdown}>
            <div style={{ borderTop: '5px solid #000',width:'100%',borderRadius: '10px'}}/>
            <div style={{ borderTop: '5px solid #000',width:'100%',borderRadius: '10px'}}/>
            <div style={{ borderTop: '5px solid #000',width:'100%',borderRadius: '10px'}}/>
        </div>
        <NavbarDropdownBox isOpen={isOpen}/>
    </nav>
  );
};

export default Navbar;