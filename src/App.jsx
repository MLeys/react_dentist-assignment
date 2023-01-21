import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Procedures from './components/Procedures/Procedures';
import { Route, Routes, Link, Navigate } from 'react-router-dom'

function App() {
  
  return (
    <>
      <nav>
        <a>
          <Link to="/">Home</Link> 
        </a>
        <a><Link to="/contact">Contact Us!</Link></a>
        
        <Link to="/procedures">See Our Procedues</Link>

      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/procedures' element={<Procedures />} />
          <Route path="*" element={<Navigate to='/' replace /> } />

        </Routes>

      </div>
    </>
);
}

export default App
