import React, { useState } from 'react';

export default function EvenNumber() {
    const [number, setNumber] = useState('');
    const [answer, setAnswer] =  useState('');

    const handleNumberChange = (e) => {
        const value = e.target.value;
        setNumber(value);
        
        if (value % 2 === 0){
            setAnswer(`${value} is an Even Number!`)
        } else{
            setAnswer(`${value} is an Odd Number!`)
        }
      };


    return(
        <div className = 'evenNumber' >
        <h1>Even numbers</h1>
        <h3>Oppgave 1.49</h3>

        <label>Even Number check: </label>
            <input 
              type="number" 
              value={number} 
              onChange={handleNumberChange} 
              placeholder="Enter Number"
            />
            <p>{answer}</p>
        </div>
        
    )
    
}