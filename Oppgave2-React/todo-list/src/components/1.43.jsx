import React, { useState } from 'react';
import './CSS/1.43.css'


export default function Converter() {
    const [centimeter, setCentimeter] = useState('');
    const [tommer, setTommer] = useState('');

    const handleCentimeterChange = (e) => {
        const value = e.target.value;
        setCentimeter(value);
        setTommer((value !== '' ? (value /2.54).toFixed(2) : ''));
      };

      const handleTommerChange = (e) => {
        const value = e.target.value;
        setTommer(value);
        setCentimeter ((value !== '' ? (value * 2.54).toFixed(2) :    ''));
      };

      return (
        <div className = "container">
          <h1>Temperature Converter</h1>
          
           
           <label>Centimeter: </label>
            <input 
              type="number" 
              value={centimeter} 
              onChange={handleCentimeterChange} 
              placeholder="Enter Centimeter"
            />
          
          <br />
          
            <label>Tommer: </label>
            <input 
              type="number" 
              value={tommer} 
              onChange={handleTommerChange} 
              placeholder="Enter Fahrenheit"
            />
           
            
        </div>
      );
    };
    
