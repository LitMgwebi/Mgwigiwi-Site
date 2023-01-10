const { Schema, model} = require("mongoose");

const characterDesignSchema = new Schema({
    nameOfCharacter: {
        type: String,
        required: [true, "Please enter the name of your character: "]
    }
})