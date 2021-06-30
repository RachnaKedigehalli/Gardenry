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

const add_plant = (req, res, next) => {
    const plant = new Plant(req.body);
    plant.save()
        .then(data => {
            res.send(data);
        })
        .catch(next);
}

router.post('/plants', add_plant);
router.get('/space/:id', space_plants);

module.exports = router;