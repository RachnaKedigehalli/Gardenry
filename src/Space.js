import { useEffect, useState } from "react";
import Button from "./Button";
import image from "./images/garden.jpg";

const Space = ({ space }) => {
    const [isTasks, setIsTasks] = useState(false);
    const [tasks, setTasks] = useState(0);
    const [number, setNumber] = useState(0);
    var today = new Date();
    today.setDate(today.getDate() + 1);
    today = new Date(today.toDateString());
    
    useEffect(() => {
        space.plants.map(plant => {
            setNumber(prevNumber => prevNumber + plant.number);
            const waterDate = new Date(plant.lastWatered);
            waterDate.setDate(waterDate.getDate() + plant.wateringInterval);
            if( waterDate - today < 0) {
                console.log("blahh"+ tasks);
                setTasks(prevTasks => prevTasks + 1);
                setIsTasks(true);
            }
        });
    }, []);
    
    return (
        <div className="space">
            {isTasks && <Button text= { tasks  + " tasks for today" } />} 
            <div className="cover-photo">
                <img src= {image}></img>
            </div>
            <div className="space-details">
                <div className="space-name"> { space.name } </div>
                <p className="num-plants"> { number } plants </p>
            </div>
        </div>
    );
}
 
export default Space;