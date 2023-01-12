//#region Imports and Router Configuration
const { Router } = require("express");

const log = require('../config/logging');
const CharacterDesign = require("../Models/CharacterDesign");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const { uploadToCloudinary, removeFromCloudinary } = require("../services/cloudinary");

const router = Router();
//#endregion

//#region GET

//#region GET ALL
router.get('/', async (req, res) => {
    let cd = null;

    try{
        cd = await CharacterDesign.find({});
        res.status(200).send({
            characterDesign: cd,
            error: null,
            message: "Record retrival successful"
        });
    }catch(error){
        log.error(error);
        res.status(404).send({
            characterDesign: cd,
            error: error.message,
            message: "Record retrival failed"
        });
    }
});
//#endregion

//#region GET one
router.get('/:id', async (req, res) => {
    let cd = null;

    try {
        cd = await CharacterDesign.findById(req.params.id);

        res.status(201).send({
            characterDesign: cd,
            error: null,
            message: "Record retrieval successful"
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
});
//#endregion

//#endregion

//#region POST
router.post('/add', upload.single('originalCharacter'), async (req, res) => {
    let cd = null;
    try {
        const data = await uploadToCloudinary(req.file.path, "characterDesign")

        cd = new CharacterDesign({
            nameOfCharacter: req.body.nameOfCharacter,
            originalCharacter: data.url,
            public_id: data.public_id,
            // user_id: req.user._id
        });
        await cd.save();
        res.status(201).send({
            characterDesign: cd,
            error: null,
            message: "New record was created"
        });
    } catch (error) {
        log.error(error);
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Could not add new record"
        });
    }
})

//#endregion

//#region DELETE
router.delete('/:id', async (req, res) => {
    let cd = null
    try {
        cd = await CharacterDesign.findById(req.params.id);
        const publicId = cd.public_id;
        await removeFromCloudinary(publicId);
        await cd.remove();
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Record delete failed"
        });
    }
});
//#endregion

module.exports = router;