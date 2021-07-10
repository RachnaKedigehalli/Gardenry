import { useState } from "react";

const AddPlant = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(1);
    const [space, setSpace] = useState('');
    
    const spaces = ['adas', 'asd', 'efw'];

    return (
        <div className="add-plant">
            <h1 className="add-plant-heading"> Add Plant </h1>
            {/* Cross */}
            <form>
                <label>Name</label>
                <input
                    type="text"
                    required
                    placeholder="Enter name of the plant"
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Number of plants</label>
                <input
                    type="number"
                    required
                    value={ number }
                    min="1" max="1000"
                    onChange={(e) => setNumber(e.target.value)}
                />

                <label>Space</label>
                <input
                    placeholder="Enter space where the plant is located"
                    list="spaces-list"
                    required
                    value={ space }
                    onChange={(e) => setSpace(e.target.value)}
                />
                <datalist id="spaces-list">
                    { spaces.map((space) => <option value={space}/> )}
                </datalist>

                <label>Last watered</label>
            </form>
        </div>
    );
}
 
export default AddPlant;