//#region Imports and Router initialization
const log = require('../config/logging');
const FineArt = require("../Models/FineArt");
const {Router} = require("express");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../middleware/upload");
const {uploadToCloudinary, removeFromCloudinary} = require("../services/cloudinary");

const router = Router();
//#endregion

//#region GET

//#region GET ALL /fine-art/
router.get('/', async(req, res) => {
    let fineArt = null;

    try{
        fineArt = await FineArt.find({});
        res.status(201).send({
            fineArt: fineArt,
            error: null,
            message: "Record retrieval successful"
        });
    }catch(error){
        log.error(error.message);
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Record retrieval failed"
        })
    }
});
//#endregion

//#region GET one /fine-art/:id
router.get('/:id', async (req, res) =>{
    let fineArt = null;
    try {
        fineArt = await FineArt.findById(req.params.id);

        res.status(201).send({
            fineArt: fineArt,
            error: null,
            message: "Record retrieval successful"
        });
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
});
//endregion
//#endregion

//#endregion

//#region POST /fine-art/add/
router.post('/add', upload.single('photo'), async(req, res) => {
    let fineArt = null;
    
    try{
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
            message: "New record was created"
        });
    }catch(error){
        log.error(error);
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Could not add new record"
        });
    }
})

//#endregion

//#region PUT /fine-art/:id
router.put('/:id',  async(req, res) => {
    //Under Contruction
});
//#endregion

//#region DELETE /fine-art/:id
router.delete('/:id', async(req, res) =>{
    let fineArt = null
    try {
        fineArt = await FineArt.findById(req.params.id);
        const publicId = fineArt.public_id;
        await removeFromCloudinary(publicId);
        await fineArt.remove();
    } catch (error) {
        log.error(error.message)
        res.status(400).send({
            fineArt: fineArt,
            error: error.message,
            message: "Record retrieval failed"
        });
    }
});
//#endregion

module.exports = router