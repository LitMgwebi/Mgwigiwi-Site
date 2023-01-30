const { Schema, model } = require("mongoose");

const conceptSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of your piece: "]
    },
    description: {
        type: String
    },
    photos: {
        type: Array,
    },
    user_id: {
        type: String,
        required: true,
    },
    public_ids: {
        type: Array
    }
}, { timestamps: true });

const Concept = model('Concept', conceptSchema);

module.exports = Concept;