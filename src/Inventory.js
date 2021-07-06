import { useEffect, useState } from "react";
import Button from "./Button";
import search_icon from "./icons/search_icon.svg";
import Space from "./Space";
import SpacesList from "./SpacesList";

const Inventory = () => {
    const [subHeading, setSubHeading] = useState("All your plants ");

    const [spaces, setSpaces] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/spaces')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setSpaces(data);
            })
    }, []);
    return (
        <div className="inventory">
            <div className="inventory-heading">
                <h1> Inventory </h1>
                <img src={ search_icon } className="search"/>
            </div>
            <div className="above-line">
                <h2> {subHeading} </h2>
                <Button text="Add Plant" />
            </div>
            <div className="horizontal-line"></div>
            <div className="inventory-content">
                { spaces && <SpacesList spaces = {spaces} />}
                {/* <Space /> */}
            </div>
        </div>
    );
}
 
export default Inventory;