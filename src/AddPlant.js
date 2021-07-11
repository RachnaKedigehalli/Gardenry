import { useState } from "react";
import './add-plant.css';

const AddPlant = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const plant = {name, number, space, /*image,*/ 
                        wateringInterval, lastWatered,
                        manuringInterval, lastManured,
                        waterAssigned, manureAssigned };
        
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(plant)
        }).then(() => {
            console.log('new plant added');
        })
    }

    return (
        <div className="add-plant">
            <h1 className="add-plant-heading"> Add Plant </h1>
            {/* Cross */}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="field">
                        <label for="plant-name">Name</label>
                        <input
                            type="text"
                            id="plant-name" name="name" required
                            placeholder="Enter name of the plant"
                            value={ name }
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div className="field">
                        <label for="plant-number">Number of plants</label>
                        <input
                            type="number"
                            id="plant-number" name="number" required
                            placeholder="1"
                            list="plant-number-list"
                            value={ number }
                            min="1" max="1000"
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <datalist id="plant-number-list">
                            { Array.from(Array(50).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                        </datalist>
                    </div>
                </div>
                
                <div className="row">
                    <div className="field">
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
                    </div>
                </div>
                
                <div className="row">
                    <div className="field">
                        <label for="last-watered">Last watered</label>
                        <input
                            type="date"
                            id="last-watered" name="lastWatered"
                            value={ lastWatered }
                            onChange={ (e) => setLastWatered(e.target.value) }
                        />
                    </div>
                    
                    <div className="field">
                        <label for="watering-interval">Watering interval</label>
                        <div className="field-horizontal">
                            <input
                                type="number"
                                id="watering-interval" name="wateringInterval" required
                                placeholder="Select"
                                list="watering-interval-list"
                                value={ wateringInterval }
                                min="1"
                                onChange={(e) => setWateringInterval(e.target.value)}
                            />
                            <datalist id="watering-interval-list">
                                { Array.from(Array(15).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                            </datalist>
                            <span>days</span>
                        </div>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="field">
                        <label for="last-manured">Last manured</label>
                        <input
                            type="date"
                            id="last-manured" name="lastManured"
                            value={ lastManured }
                            onChange={ (e) => setLastManured(e.target.value) }
                        />
                    </div>

                    <div className="field">
                        <label for="manuring-interval">Manuring interval</label>
                        <div className="field-horizontal">
                            <input
                                type="number"
                                id="manuring-interval" name="manuringInterval" required
                                placeholder="Select"
                                list="manuring-interval-list"
                                value={ manuringInterval }
                                min="1"
                                onChange={(e) => setManuringInterval(e.target.value)}
                            />
                            <datalist id="manuring-interval-list">
                                { Array.from(Array(15).keys()).slice(1).map((i) =>  <option value={i}/> ) }
                            </datalist>
                            <span>days</span>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {/* Image */}
                </div>
                

                <label>Tasks assigned to</label>
                <div className="row">
                    <div className="field-horizontal">
                        <label for="water-task-assigned-to">Water</label>
                        <input
                            type="text"
                            id="water-task-assigned-to" name="waterAssigned"
                            placeholder="Select"
                            list="persons-list"
                            value={ waterAssigned }
                            onChange={(e) => setWaterAssigned(e.target.value)}
                        />
                    </div>
                    
                    <div className="field-horizontal">
                        <label for="manure-task-assigned-to">Manure</label>
                        <input
                            type="text"
                            id="manure-task-assigned-to" name="manureAssigned"
                            placeholder="Select"
                            list="persons-list"
                            value={ manureAssigned }
                            onChange={(e) => setManureAssigned(e.target.value)}
                        />
                    </div>
                    
                    <datalist id="persons-list">
                        { persons.map((person) => <option value={person}/> )}
                    </datalist>
                </div>
                
                <div className="row">
                    <button> Add plant </button>
                </div>
                
            </form>
        </div>
    );
}
 
export default AddPlant;