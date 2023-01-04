//#region Imports and Router initialization
const log = require('../config/logging');
const Concept = require("../Models/Concept");
const {Router} = require("express");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const {uploadToCloudinary, removeFromCloudinary} = require("../services/cloudinary");

const router = Router();
//#endregion


//#region GET

//#region GET AlL
router.get("/", async (req, res) => {
    let concept = null;

    try{
        concept = await Concept.find({});
        res.status(201).send({
            concept: concept,
            error: null,
            message: "Record retrieval successful"
        });
    }catch(error){
        log.error(error.message);
        res.status(400).send({
            concept: concept,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
});
//#endregion

//#region GET 1
router.get("/:id", async(req, res) => {
    let concept = null;
    try {
        concept = await Concept.findById(req.params.id);

        res.status(201).send({
            concept: concept,
            error: null,
            message: "Record retrieval successful"
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            concept: concept,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
})
//#endregion

//#endregion

//#region POST
router.post('/add', upload.array("photos"), async(req, res) => {
    let concept = null;
    let photoArray = [];
    let public_idArray = []
    let data = null

    try{
        req.files.map(async(file, i) => {
            data =  await uploadToCloudinary(file.path, "concept");
            photoArray.push(data.url);
            public_idArray.push(data.public_id);
        });

        concept = new Concept({
            title: req.body.title,
            description: req.body.description,
            photos: photoArray,
            public_ids: public_idArray,
        });

        await concept.save();

        res.status(201).send({
            concept: concept,
            error: null,
            message: "New record was created"
        });
    }catch(error){
        log.error(error);
        res.status(400).send({
            concept: concept,
            error: error.message,
            message: "Could not add new record"
        });
    }
});
//#endregion