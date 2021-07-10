import { useState } from "react";
import './add-plant.css';

const AddPlant = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(1);
    const [space, setSpace] = useState('');
    const [lastWatered, setLastWatered] = useState(new Date().toLocaleDateString());
    const [wateringInterval, setWateringInterval] = useState();
    const [lastManured, setLastManured] = useState(new Date().toLocaleDateString());
    const [manuringInterval, setManuringInterval] = useState();
    const [waterAssigned, setWaterAssigned] = useState('');
    const [manureAssigned, setManureAssigned] = useState('');

    const spaces = ['adas', 'asd', 'efw'];
    const persons = ['adas', 'asd', 'efw'];
// autocomplete=”off”----The “off” state tells the browser neither to store the value entered for
//   this input nor to suggest previously entered values. This should be
//   used if the data is sensitive or the value will never be reused.
    return (
        <div className="add-plant">
            <h1 className="add-plant-heading"> Add Plant </h1>
            {/* Cross */}
            <form>
                <label for="plant-name">Name</label>
                <input
                    type="text"
                    id="plant-name" name="name" required
                    placeholder="Enter name of the plant"
                    value={ name }
                    onChange={(e) => setName(e.target.value)}
                />

                <label for="plant-number">Number of plants</label>
                <input
                    type="number"
                    id="plant-number" name="number" required
                    list="plant-number"
                    value={ number }
                    min="1" max="1000"
                    onChange={(e) => setNumber(e.target.value)}
                />
                <datalist id="plant-number">
                    { Array.from(Array(11).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                </datalist>

                <label for="plant-space">Space</label>
                <input
                    type="text"
                    id="plant-space" name="space" required
                    placeholder="Enter space where the plant is located"
                    list="spaces-list"
                    value={ space }
                    onChange={(e) => setSpace(e.target.value)}
                />
                <datalist id="spaces-list">
                    { spaces.map((space) => <option value={space}/> )}
                </datalist>

                <label for="last-watered">Last watered</label>
                <input
                    type="date"
                    id="last-watered" name="lastWatered"
                    value={ lastWatered }
                    onChange={ (e) => setLastWatered(e.target.value) }
                />

                <label>Watering interval</label>
                <input
                    type="number"
                    required
                    placeholder="Select"
                    list="watering-interval-list"
                    value={ wateringInterval }
                    min="1"
                    onChange={(e) => setWateringInterval(e.target.value)}
                />
                <datalist id="watering-interval-list">
                    { Array.from(Array(15).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                </datalist>

                <label>Last manured</label>
                <input
                    type="date"
                    value={ lastManured }
                    onChange={ (e) => setLastManured(e.target.value) }
                />

                <label>Manuring interval</label>
                <input
                    type="number"
                    required
                    placeholder="Select"
                    list="manuring-interval-list"
                    value={ manuringInterval }
                    min="1"
                    onChange={(e) => setManuringInterval(e.target.value)}
                />
                <datalist id="manuring-interval-list">
                    { Array.from(Array(15).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                </datalist>

                {/* Image */}

                <label>Tasks assigned to</label>
                <label>Water</label>
                <input
                    type="text"
                    placeholder="Select"
                    list="persons-list"
                    value={ waterAssigned }
                    onChange={(e) => setWaterAssigned(e.target.value)}
                />
                <label>Manure</label>
                <input
                    type="text"
                    placeholder="Select"
                    list="persons-list"
                    value={ manureAssigned }
                    onChange={(e) => setManureAssigned(e.target.value)}
                />
                <datalist id="persons-list">
                    { persons.map((person) => <option value={person}/> )}
                </datalist>

                <button> Add plant </button>
            </form>
        </div>
    );
}
 
export default AddPlant;