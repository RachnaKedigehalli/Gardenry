import { useState } from "react";
import Button from "./Button";
import search_icon from "./icons/search_icon.svg";

const Inventory = () => {
    const [subHeading, setSubHeading] = useState("All your plants ");
    return (
        <div className="inventory">
            <div className="inventory-heading">
                <h1> Inventory </h1>
                <img src={ search_icon } className="search"/>
            </div>
            <div className="above-line">
                <h2> {subHeading} </h2>
                <Button text="Add Plant"></Button>
            </div>
            <div className="horizontal-line"></div>
            <div className="spaces">
                
            </div>
        </div>
    );
}
 
export default Inventory;