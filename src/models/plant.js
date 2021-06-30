const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    number: {
        type: Number,
        default: 1,
        required: true
    },
    space: {
        type: Schema.Types.ObjectId,
        ref: 'Space'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    wateringInterval: {
        type: Number,
        required: [true, 'Watering interval is required']
    },
    lastWatered: {
        type: Date,
        default: Date.now
    },
    manuringInterval: {
        type: Number,
        required: [true, 'Manuring interval is required']
    },
    lastManured: {
        type: Date,
        default: Date.now
    },
    waterAssigned: {
        type: Schema.Types.ObjectId,
        ref: 'Person'  
    },
    manureAssigned: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
}, { timestamps: true });

const Plant = mongoose.model('plant', plantSchema);
module.exports = Plant;