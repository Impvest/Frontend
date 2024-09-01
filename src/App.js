import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Navbar from './components/Navbar';
import RoutesConfig from './Routes'; // Ensure this matches the renamed file
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
      <div>
        <Navbar />
        <RoutesConfig /> 
        <Footer/>
      </div>
  );
}

export default App;
