//#region Imports and Router Configuration
const { Router } = require("express");

const log = require('../config/logging');
const CharacterDesign = require("../Models/CharacterDesign");
const Translation = require("../Models/Translation");
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
            message: "Character designs retrived successfully"
        });
    }catch(error){
        log.error(error);
        res.status(404).send({
            characterDesign: cd,
            error: error.message,
            message: "Character designs retrival failed"
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
            message: "Character design retrieval successful"
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Character design retrieval failed"
        });
    }
});
//#endregion

//#endregion

//#region POST
router.post('/add', upload.single('originalCharacter'), requireAuth, async (req, res) => {
    let cd = null;
    try {
        const data = await uploadToCloudinary(req.file.path, "characterDesign")

        cd = new CharacterDesign({
            nameOfCharacter: req.body.nameOfCharacter,
            originalCharacter: data.url,
            public_id: data.public_id,
            user_id: req.user._id
            // user_id: req.user._id
        });
        await cd.save();
        res.status(201).send({
            characterDesign: cd,
            error: null,
            message: "New character design was successfully added"
        });
    } catch (error) {
        log.error(error);
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Could not add new character design"
        });
    }
})

//#endregion

//#region DELETE
router.delete('/:id', requireAuth, async (req, res) => {
    let cd = null
    try {
        cd = await CharacterDesign.findById(req.params.id);

        deleteTranslation(req.params.id)

        const publicId = cd.public_id;
        await removeFromCloudinary(publicId);
        await cd.remove();

        res.status(201).send({
            error: null,
            message: "Character design deleted successfully",
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            characterDesign: cd,
            error: error.message,
            message: "Could not delete character design"
        });
    }
});
//#endregion

//#region Helper Functions
async function deleteTranslation(id){
    // Translation.find({characterDesign: id}, async function(err, docs) {
    //     if(err) {
    //         log.error(err);
    //     }else{
    //         docs.map(async doc => {
    //             for(let i = 0; i < doc.public_ids.length; i++){
    //                 const publicId = doc.public_ids[i];
    //                 await removeFromCloudinary(publicId);
    //             }
    //         });
    //         await docs.remove();
    //     }
    // });

    for await (const doc of Translation.find({ characterDesign: id })) {
        try{
            for(let i = 0; i < doc.public_ids.length; i++){
                const publicId = doc.public_ids[i];
                await removeFromCloudinary(publicId);
            }

            await doc.remove();
        }catch(error){
            log.error(error);
        }
    }
}
//#endregion
module.exports = router;