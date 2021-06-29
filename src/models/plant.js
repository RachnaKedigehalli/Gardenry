const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({

});

const Plant = mongoose.model('plant', plantSchema);
module.exports = Plant;