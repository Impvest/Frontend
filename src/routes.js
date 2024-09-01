import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default RoutesConfig;
