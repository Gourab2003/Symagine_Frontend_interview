import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import './index.css';
import App from './App';
import About from './components/About'; // Import your About component
import Contact from './components/Contect'; // Import your Contact component
import Main from '../src/components/Main'; // Import your Main component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>
);
