import React from "react";
import { useLocation } from "react-router-dom";


interface DropdownBoxProps {
  isOpen: boolean;
}

const DropdownBox: React.FC<DropdownBoxProps> = ({ isOpen }) => {
const location = useLocation();
const currentPath = location.pathname;
  if (!isOpen) return null;

  return (
    <div className={`absolute top-[60px] right-0 w-[185px] md:w-[253px] bg-white p-[12px_26px] md:px-[38px] md:py-[22px] flex flex-col gap-2.5 z-50 text-[16px] md:text-lg`}>
      <a href="/aboutUs" style={{color: currentPath=== '/aboutUs'  ? 'green' : 'black'}}>Profile</a>
      <a href="/consulting" style={{color: currentPath=== '/consulting'  ? 'green' : 'black'}}>Consulting</a>
      <a href="/academy" style={{color: currentPath=== '/academy'  ? 'green' : 'black'}}>Accademy</a>
      <a href="/innovation" style={{color: currentPath=== '/innovation'  ? 'green' : 'black'}}>Innovation</a>
      <a href="/contactUs" style={{color: currentPath=== '/contactUs'  ? 'green' : 'black'}}>Contact Us</a>
      <a href="/signIn" style={{color: currentPath=== '/signIn'  ? 'green' : 'black'}}>Sign in</a>

    </div>
  );
};

export default DropdownBox;
