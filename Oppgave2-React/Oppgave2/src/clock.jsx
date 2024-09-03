import {useState, useEffect} from 'react';


export default function Clock() {

    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalid = setInterval(() => {
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


    return(
        <>
        <h3>The clock is:</h3>
        <span>{formatTime()} </span>

        </>
        
    )
}