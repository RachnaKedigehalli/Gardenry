const Home = () => {
    const handleClick = () => {
        console.log("Plant added!");
    }
    return ( 
        <button onClick={handleClick}>Add a plant</button>
     );
}
 
export default Home;