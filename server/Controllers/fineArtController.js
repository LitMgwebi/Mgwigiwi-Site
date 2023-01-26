//#region Imports and Router initialization
const log = require('../config/logging');
const FineArt = require("../Models/FineArt");
const { Router } = require("express");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const { uploadToCloudinary, removeFromCloudinary } = require("../services/cloudinary");

const router = Router();
//#endregion

//#region GET

//#region GET ALL /fine-art/
router.get('/', async (req, res) => {
    let fineArt = null;

    try {
        const landscape = await FineArt.find({physicalType: 'Landscape'}).exec();
        const portrait = await FineArt.find({physicalType: 'Portrait'}).exec();
        const other = await FineArt.find({physicalType: 'Other'}).exec();

        fineArt = {
            landscape: landscape,
            portrait: portrait,
            other: other
        }
        res.status(201).send({
            fineArt: fineArt,
            error: null,
            message: "Fine Art retrieved successfully"
        });
    } catch (error) {
        log.error(error.message);
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Fine Art retrieval failed"
        })
    }
});
//#endregion

//#region GET one /fine-art/:id
router.get('/:id', async (req, res) => {
    let fineArt = null;
    try {
        fineArt = await FineArt.findById(req.params.id);

        res.status(201).send({
            fineArt: fineArt,
            error: null,
            message: "Fine art piece retrieval successful"
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Fine art piece retrieval failed"
        });
    }
});
//endregion
//#endregion

//#endregion

//#region POST /fine-art/add/
router.post('/add', upload.single('photo'), async (req, res) => {
    let fineArt = null;
    try {
        const data = await uploadToCloudinary(req.file.path, "fine")

        fineArt = new FineArt({
            title: req.body.title,
            physicalType: req.body.physicalType,
            description: req.body.description,
            dimension: req.body.dimension,
            photo: data.url,
            public_id: data.public_id,
            // user_id: req.user._id
        });
        await fineArt.save();
        res.status(201).send({
            fineArt: fineArt,
            error: null,
            message: "New fine art piece was added successfully"
        });
    } catch (error) {
        log.error(error);
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Could not add new fine art piece"
        });
    }
})

//#endregion

//#region PUT /fine-art/:id
router.put('/:id', async (req, res) => {
    //Under Contruction
});
//#endregion

//#region DELETE /fine-art/:id
router.delete('/:id', async (req, res) => {
    let fineArt = null
    try {
        fineArt = await FineArt.findById(req.params.id);
        const publicId = fineArt.public_id;
        await removeFromCloudinary(publicId);
        await fineArt.remove();

        res.status(201).send({
            error: null,
            message: "Fine art piece deleted successfully",
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Could not delete fine art piece"
        });
    }
});
//#endregion

module.exports = router