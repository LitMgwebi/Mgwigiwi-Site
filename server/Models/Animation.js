const { Schema, model } = require("mongoose");

const animationSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of your piece: "]
    },
    preview: {
        type: String,
    },
    preview_public_id: {
        type: String,
    },
    description: {
        type: String,
    },
    movements: {
        type: Array,
    },
    movements_public_ids: {
        type: Array,
    },
    backgrounds: {
        type: Array,
    },
    backgrounds_public_ids: {
        type: Array,
    },
    effects: {
        type: Array,
    },
    effects_public_ids: {
        type: Array,
    },
    user_id: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Animation = model('Animation', animationSchema);

module.exports = Animation;