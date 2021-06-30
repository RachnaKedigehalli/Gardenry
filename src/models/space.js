const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spaceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Space name is required']
    },
    image: {
        data: Buffer,
        contentType: String
    },
    // ref helps us get full fields of Plant when we call populate() method.
    plants: [{
        type: Schema.Types.ObjectId,
        ref: 'Plant'
    }],
    number: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Space = mongoose.model('space', spaceSchema);
module.exports = Space;