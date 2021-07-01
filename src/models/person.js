const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    // ref helps us get full fields of Plant when we call populate() method.
    plants: [{
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }]
}, { timestamps: true });

const Person = mongoose.model('Person', personSchema);
module.exports = Person;