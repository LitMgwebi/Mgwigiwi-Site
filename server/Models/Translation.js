const {Schema, model} = require("mongoose");

const translationSchema = new Schema({
    process: {
        type: Array,
    },
    public_ids: {
        type: Array,
    },
    description:{
        type: String,
    },
    characterDesign: {
        type: Schema.Types.ObjectId,
        required: true,
        // ref: 'CharacterDesign'
    },
    user_id: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Translation = model("Translation", translationSchema);

module.exports = Translation;