import {useState, useEffect} from 'react';
import './DigitalClock.css'

export default function Clock(){

    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(()=> {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalid);
        }
    }, []);

    function formatTime(){
        let houers = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${houers}:${minutes}:${seconds}`;
    }

    function formatDate(){
        let day = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();

        return`${day}.${month}.${year}`;
    }

    return(
        <div className= 'clockContainer'>
            <h1>The Time is: </h1>

            <div className= 'clock'>
                <span> {formatTime()} </span>
            </div>

            <div className = 'date'>
            
                <span> Date: {formatDate()} </span>
            </div>
            
        </div>
    )
}