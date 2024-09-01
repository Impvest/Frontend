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
    <div className="dropdown-box" style={{ position: 'absolute', top: '70px', marginLeft:'auto',width:'250px', background: '#fff',  padding: '20 40 20 40', display:'flex',flexDirection:'column',alignItems:'center'}}>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0', gap:'20px'}}>
        <li><a href="/profile" style={{color: currentPath=== '/profile'  ? 'green' : 'black'}}>Profile</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  );
};

export default DropdownBox;
