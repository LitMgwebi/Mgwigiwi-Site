const { Schema, model} = require("mongoose");

const characterDesignSchema = new Schema({
    nameOfCharacter: {
        type: String,
        required: [true, "Please enter the name of your character: "]
    },
    originalCharacter: {
        type: String,
        // required: [true, "Please enter the origin of the character: "]
    },
    public_id: {
        type: String,
    },
}, {timestamps: true});

const CharacterDesign = model('CharacterDesign', characterDesignSchema);

module.exports = CharacterDesign;