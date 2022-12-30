//#region Imports and Router initialization
const {Router} = require('express');
const User = require('../Models/User');
const jwt = require("jsonwebtoken");
const { send } = require('process');

const router = Router();
//#endregion
router.post('/login', async(req, res)=> {
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).send({email, token, message:"Logged in"});
    }catch(error){
        res.status(400).send({error: error.message});
    }
})
//#region Login Route

//#endregion


//#region Signup Route
router.post('/signup', async(req, res)=> {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).send({email, token, message:"Signed up"});
    }catch(error){
        res.status(400).send({error: error.message});
    }
})
//#endregion


//#region Helper Functions
function createToken(_id){
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
//#endregion

module.exports = router;