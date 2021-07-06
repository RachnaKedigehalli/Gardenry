import Space from "./Space";

const SpacesList = ({spaces}) => {
    console.log(spaces);
    return (
        <div className="space-list">
            {spaces.map(space => <Space space = {space} key = {space._id} />)}
        </div>
    );
}
 
export default SpacesList;