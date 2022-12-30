const { Schema, model } = require('mongoose');

const fineArtSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of this piece: "]
    },
    physicalType: {
        type: String,
        required: [true, "Please specify the type of Fine Art this is: "]
    },
    dimension: {
        type: String,
    },
    description: {
        type: String
    },
    photo: {
        type: String,
    },
    //    user_id: {
    //         type: String,
    //         required: true,
    //    },
    public_id: {
        type: String
    }

}, { timestamps: true });

const FineArt = model('FineArt', fineArtSchema);

module.exports = FineArt;