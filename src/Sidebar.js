const Sidebar = () => {
    const title = "Gardenry";
    return ( 
        <nav className="sidebar">
            <h1>Gardenry</h1>
            <div className="tabs">
                <a className="tab">Inventory</a>
                <a className="tab">Tasks</a>
                <a className="tab">People</a>
                <a className="tab">Profile</a>
                Logout
            </div>
        </nav>  
    );
}
 
export default Sidebar;