import {useState, useEffect} from 'react';
import './CSS/DigitalClock.css'




export default function Clock(){

    const[time, setTime] = useState(10);

    useEffect(() => {

        const intervalid = setInterval(()=> {

            if (time == 0){
                
                setTime(10);
            }
            else {
                setTime(time - 1);
            }
            

        }, 1000);

        return () => {
            clearInterval(intervalid);
        }
    }, [time]);
    

    return(
        <div className= 'clockContainer'>
            <h1>Time Left: </h1>

            <div className= 'clock'>
                <span> {time} </span>
    
            </div>
            
        </div>
    )
}