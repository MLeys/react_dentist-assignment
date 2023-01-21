import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home';

function App() {
  
  return (
    <div>
      <nav>
        <a href="/">Go to Home Page</a>
        <a href="/procedures">See Our Procedures</a>
        <a href="/contact">Contact Us!</a>
      </nav>
      <div>
        <Home />
      </div>
    </div>
);
}

export default App
