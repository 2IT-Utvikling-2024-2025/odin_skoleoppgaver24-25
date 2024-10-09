import React, { useState } from 'react';

export default function OddEvenNumber() {
    const [numberInput, setNumberInput] = useState(''); 
    const [oddNumbers, setOddNumbers] = useState([]); 
    const [evenNumbers, setEvenNumbers] = useState([]);

    const handleNumberChange = (e) => {
        const value = e.target.value;
        setNumberInput(value);
    };

    const handleAddNumber = () => {
        const number = parseInt(numberInput);
       
            if (number % 2 === 0) {
                setEvenNumbers([...evenNumbers, number]);
            } else {
                setOddNumbers([...oddNumbers, number]); 
            }
            
            setNumberInput('');
    };

    return (
        <div className='oddEvenNumber'>
            <h1>Odd and Even Numbers</h1>
            <h3>Oppgave 1.49</h3>

            <label>Number Check: </label>
            <input
                type="number"
                value={numberInput}
                onChange={handleNumberChange}
                placeholder="Enter Number"
            />
            <button onClick={handleAddNumber}>Add Number</button>

            <h3>Odd Numbers: {oddNumbers.length > 0 ? oddNumbers.join(', ') : 'None'}</h3>
            <h3>Even Numbers: {evenNumbers.length > 0 ? evenNumbers.join(', ') : 'None'}</h3>
        </div>
    );
}
