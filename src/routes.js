const express = require('express');
const router = express.Router();
const Space = require('./models/space');
const Plant = require('./models/plant');

// get all plants in a space
const space_plants = (req, res, next) => {
    console.log("test");
    Space.find({ name: req.params.name }).populate('plants')
        .then(plants => res.send(plants));
}

// get all spaces in db
const get_spaces = (req, res, next) => {
    Space.find()
        .then(spaces => res.send(spaces));
}

// get all plants
const get_plants = (req, res, next) => {
    Plant.find().sort({ createdAt:-1 })
        .then(plants => res.send(plants));
}

// add a plant to the db
const add_plant = (req, res, next) => {
    
    Space.findOneAndUpdate({name: req.body.space}, {},
        { upsert: true, new: true})
        .then(space => {
            delete req.body.space;
            Plant.create(req.body)
                .then(plant => {
                    Plant.findByIdAndUpdate(plant._id,
                        {space: space._id},
                        {new: true})
                        .then(plant => {
                            Space.findByIdAndUpdate(plant.space,
                                { $push: { plants: plant._id } },
                                { new: true })
                                .then(space =>{
                                    res.send(plant);
                                });
                        });
                }); 
        })
        .catch(next);
}

router.post('/add-plants', add_plant);
router.get('/space/:name', space_plants);
router.get('/plants', get_plants);
router.get('/spaces', get_spaces);

module.exports = router;