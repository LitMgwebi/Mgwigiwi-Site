//#region Server imports
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//#endregion

//#region Directory Imports
const log = require("./config/logging");
const fineArtController = require("./Controllers/fineArtController");
const userController = require("./Controllers/userController");
const backgroundController = require("./Controllers/backgroundController");
const conceptController = require("./Controllers/conceptController");
const characterDesignController = require("./Controllers/characterDesignController");
//#endregion

//#region Server configuration
const dbURL = process.env.DBURL;
const port = process.env.PORT;
const host = process.env.HOST

const server = express();
server.use(express.json());
server.use(cors());
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//#endregion

//#region Database configuration
mongoose.connect(dbURL)
    .then(() => {
        log.info('Connected to database');
        server.listen(port, host, () => {
            log.info(`Listening at http://${host}:${port}`);
        });
    }).catch((err)=> {
        log.error(err);
    })
//#endregion

//#region Routing
server.get('/', (req, res) => {
    res.send('Hi')
});
server.use('/background', backgroundController);
server.use('/fineArt', fineArtController);
server.use('/auth', userController);
server.use('/concept', conceptController);
server.use('/characterDesign', characterDesignController);
//#endregion
