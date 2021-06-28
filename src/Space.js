import { useState } from "react";
import Button from "./Button";
import image from "./images/garden.jpg";

const Space = () => {
    const [isTasks, setIsTasks] = useState(true);
    return (
        <div className="space">
            {isTasks && <Button text="2 tasks for today" />} 
            <div className="cover-photo">
                <img src= {image}></img>
            </div>
            <div className="space-details">
                <div className="space-name"> Patio </div>
                <p className="num-plants"> 23 plants </p>
            </div>
        </div>
    );
}
 
export default Space;