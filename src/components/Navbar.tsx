import React, { useState } from 'react';
import '../styles/global.css'; // Ensure this imports Tailwind styles
import logo from "../../public/images/impvestLogo.svg";
import { Link, useLocation } from "react-router-dom";
import NavbarDropdownBox from "./NavbarDropBox";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClasses = (path: string) =>
    `text-xl items-center whitespace-nowrap ${currentPath === path ? 'text-green-500' : 'text-black'}`;

  return (
    <>
      {/* Large screens */}
      <nav className="hidden lg:flex gap-4 h-20 w-screen items-center px-12 py-2.5">
        
        <Link to="/">
          <img
            src={logo}
            alt="Impvest"
            style={{height:'48px'}}
          />
        </Link>
        <div className="ml-auto items-center flex h-12 text-xl gap-12 whitespace-nowrap">
          <Link to="/aboutUs" className={linkClasses('/aboutUs')}>About Us</Link>
          <Link to="/consulting" className={linkClasses('/consulting')}>Consulting</Link>
          <Link to="/academy" className={linkClasses('/academy')}>Academy</Link>
          <Link to="/innovation" className={linkClasses('/innovation')}>Innovation</Link>
          <Link to="/contactUs" className={linkClasses('/contactUs')}>Contact Us</Link>
          <Link to="/signIn" className="bg-[#dafabc] px-8 py-1 items-center rounded-full">Sign In</Link>
        </div>
      </nav>

      {/* Medium and small screens */}
      <nav className="lg:hidden flex h-16 w-full items-center px-4 py-2.5 relative">
        <Link to="/">
          <img
            src={logo}
            alt="Impvest"
            className="h-10"
          />
        </Link>
        <div className="ml-auto flex flex-col w-fit gap-1.5" onClick={toggleDropdown}>
          <div className="commonHamburgerStyle"/>
          <div className="commonHamburgerStyle"/>
          <div className="commonHamburgerStyle"/>
        </div>
        {isOpen && <NavbarDropdownBox isOpen={isOpen} />}
      </nav>
    </>
  );
};

export default Navbar;
