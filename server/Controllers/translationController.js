//#region Imports and Router Configuration
const { Router } = require("express");

const log = require('../config/logging');
const Translation = require("../Models/Translation");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const { uploadToCloudinary, removeFromCloudinary } = require("../services/cloudinary");

const router = Router();
//#endregion


//#region GET
router.get('/', async(req, res) => {
    const {characterDesgin} = req.params
    let translation = null;

    // const query = Translation.find({ characterDesign: characterDesgin})
    try {
        translation = await Translation.find({ characterDesign: characterDesgin}).exec();
        res.status(200).send({
            translation: translation,
            error: null,
            message: "Record retrival successful"
        });
    }catch(error){
        log.error(error);
        res.status(404).send({
            translation: translation,
            error: error.message,
            message: "Record retrival failed"
        });
    }
});
//#endregion

//#region POST
router.post('/add', upload.array("photos"), async(req, res) => {
    let translation = null;
    let data;
    const process = [];
    const public_ids = [];

    try {
        const files = req.files;
        for (const file of files) {
            const {path} = file;
            data = await uploadToCloudinary(path, "translation");

            const {url, public_id} = data;
            process.push(url);
            public_ids.push(public_id);
        }

        translation = new Translation({
            description: req.body.description,
            characterDesign: characterDesign,
            process: process,
            public_ids: public_ids
        });

        await translation.save();

        res.status(201).send({
            translation: translation,
            error: null,
            message: "New record was created"
        });
    }catch(error){
        log.error(error);
        res.status(400).send({
            translation: translation,
            error: error.message,
            message: "Could not add new record"
        });
    }
});
//#endregion

//#region DELETE
//#endregion
module.exports = router;