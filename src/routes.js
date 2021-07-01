const express = require('express');
const router = express.Router();
const Space = require('./models/space');
const Plant = require('./models/plant');

// get all plants in a space
const space_plants = (req, res, next) => {
    const id = req.params.id;
    Space.findById(id).populate('Plant')
        .then(plants => res.send(plants));
}

const get_plants = (req, res, next) => {
    Plant.find().sort({ createdAt:-1 })
        .then(plants => res.send(plants));
}

const add_plant = (req, res, next) => {
    // const plant = new Plant(req.body);
    // plant.save()
    
    // console.log(req);
    console.log(req.body.space);
    
    // Space.findOne({name: req.body.space}).then(space=>console.log(space));

    Space.findOneAndUpdate({name: req.body.space},
        {},
        { upsert: true, new: true})
        .then(space => {
            console.log("test...");
            console.log(space);
            delete req.body.space;
            Plant.create(req.body)
                .then(plant => {
                    console.log(space._id);
                    Plant.findByIdAndUpdate(plant._id,
                        {space: space._id},
                        {new: true})
                        .then(plant => {
                            Space.findByIdAndUpdate(plant.space,
                                { $push: { plants: plant._id } },
                                { new: true, useFindAndModify: false })
                                .then(space =>{
                                    console.log(plant);
                                    console.log(space);
                                    res.send(plant);
                                });
                        });
                    
                }); 
        })
        .catch(next);

}

router.post('/add-plants', add_plant);
router.get('/space/:id', space_plants);
router.get('/plants', get_plants);

module.exports = router;