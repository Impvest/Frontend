import React, { useState } from 'react';
import '../styles/global.css';
import logo from "../../public/images/impvestBlackLogo.svg";
import { Link, useLocation } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{color:'white' ,gap:'20px', height: '203px',width:'screen',display:'flex',flexDirection:'column',padding: '30px', backgroundColor:'#3E3E3E'}}>
      <div className="footerLogo" style={{height:'fit', width:'max',display:'block'}}>
        <img
            src={logo}
            alt="Impvest"
            style={{ height: '33px' }}
          />
        <div style={{fontSize:'12px',fontWeight:'100'}}>
          © 2024 Impvest. All Rights Reserved.
        </div>
      </div>
      <div style={{gap:'10px', display: 'flex',flexDirection:'column',fontSize: '15px',fontStyle: 'normal',fontWeight: '400',lineHeight: '9px'}}>
        <div>Contact us</div>
        <div>Privacy</div>
        <div>Term & Condition</div>
        <div>FAQs</div>
      </div>
      <div className="social media" style={{display:'flex', height:'30px'}}>
        
      </div>
    </footer>
  );
};

export default Footer;
