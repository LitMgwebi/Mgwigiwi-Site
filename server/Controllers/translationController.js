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
    const id = req.query.characterDesign
    let translation = null;
    // const query = await 
    
    try {
        translation = await Translation.find({ 
            characterDesign: id
        }).exec();
        
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
router.post('/add', upload.array("process"), async(req, res) => {
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
            characterDesign: req.body.characterDesign,
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
        for(let i = 0; i < public_ids.length; i++){
            const publicId = public_ids[i];
            await removeFromCloudinary(publicId);
        }
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
router.delete("/:id", async function(req, res) {
    let translation = null;
    try{
        translation = await Translation.findById(req.params.id);
        for(let i = 0; i < translation.public_ids.length; i++){
            const publicId = translation.public_ids[i];
            await removeFromCloudinary(publicId);
        }
        
        await translation.remove();
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            translation: translation,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
})
//#endregion

module.exports = router;