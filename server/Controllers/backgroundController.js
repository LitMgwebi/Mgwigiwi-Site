//#region Imports and Router initialization
const log = require('../config/logging');
const Background = require("../Models/Background");
const {Router} = require("express");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const {uploadToCloudinary, removeFromCloudinary} = require("../services/cloudinary");

const router = Router();
//#endregion

//#region GET

//#region GET ALL
router.get('/', async (req, res) => {
    let background = null;

    try {
        background = await Background.find({});
        res.status(201).send({
            background: background,
            error: null,
            message: "Backgrounds retrieved successful"
        });
    }catch(error){
        log.error(error.message);
        res.status(400).send({
            background: background,
            error: error.message,
            message: "Backgrounds retrieval failed"
        })
    }
});
//#endregion


//#region POST
router.post('/add', upload.single("photo"), requireAuth, async(req, res) => {
    let background = null;
    try{
        const data = await uploadToCloudinary(req.file.path, "background")

        background = new Background({
            title: req.body.title,
            photo: data.url,
            public_id: data.public_id,
            user_id: req.user._id
        });

        await background.save();
        res.status(201).send({
            background: background,
            error: null,
            message: "New background piece was added successfully"
        });
    }catch(error){
        log.error(err.message);
        res.status(400).send({
            background: background,
            error: err.message,
            message: "Could not add new background piece"
        });
    }
});
//#endregion

//#region DELETE /fine-art/:id
router.delete('/:id', requireAuth, async(req, res) =>{
    let background = null
    try {
        background = await Background.findById(req.params.id);
        const publicId = background.public_id;
        await removeFromCloudinary(publicId)
        await background.remove();

        res.status(201).send({
            error: null,
            message: "Background piece deleted successfully",
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            background: background,
            error: error.message,
            message: "Could not delete background piece"
        });
    }
});
//#endregion

module.exports = router;