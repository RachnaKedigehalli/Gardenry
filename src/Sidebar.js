import inventory_icon from "./icons/inventory_icon.svg";
import people_icon from "./icons/people_icon.svg";
import profile_icon from "./icons/profile_icon.svg";
import tasks_icon from "./icons/tasks_icon.svg";
import arrow_green from "./icons/arrow_icon_green.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const title = "Gardenry";
    return ( 
        <nav className="sidebar">
            <h1> {title} </h1>
            <div className="info">
                <div className="profile-pic">
                    <img></img>
                </div>
                <div className="name">John Doe</div>
            </div>
            <div className="tabs">
                <Link to="/inventory" className="tab">
                    <span className="vertical-line" > </span>
                    <img src={inventory_icon} />
                    <div className="tab-name">Inventory</div>
                </Link>
                <a className="tab">
                    <span className="vertical-line"> </span>
                    <img src={tasks_icon} />
                    <div className="tab-name">Tasks</div>
                </a>
                <a className="tab">
                    <span className="vertical-line"> </span>
                    <img src={people_icon} />
                    <div className="tab-name">People</div>
                </a>
                <a className="tab">
                    <span className="vertical-line"> </span>
                    <img src={profile_icon} />
                    <div className="tab-name">Profile</div>
                </a>
            </div>
            <div className="logout-button">
                <span className="logout-text">Logout</span>
                <img src={arrow_green} />
            </div>
        </nav>  
    );
}
 
export default Sidebar;