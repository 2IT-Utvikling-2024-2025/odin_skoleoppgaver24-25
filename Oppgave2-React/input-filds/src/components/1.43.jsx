import React, { useState } from 'react';
import './CSS/oppgaver.css'


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
        <div className = "converter">
          <h1> Lenght Converter</h1>
          <h3>Oppgave 1.43</h3>
          
           
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
    
