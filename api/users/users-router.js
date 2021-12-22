const router = require('express').Router()
const bcrypt = require("bcryptjs")
const usersModel = require('./users-model')
const plantsModel = require('../plants/plants-model')
const { validatePhoneNumberAndPasswordInForm, checkUserIdExists, checkForToken } = require('../auth/auth-middleware')

// get all users
router.get("/", (req, res) => {
    usersModel.getAllUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({ message: "Users could not be retrieved by Database." })
        })
})

// get user by their id
router.get("/:user_id", checkUserIdExists, (req, res) => {
    usersModel.getUserById(req.params.user_id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(() => {
            res.status(500).json({ message: "The User requested could not be retrieved by the Database" })
        })
})


// update user 
router.put("/:user_id", validatePhoneNumberAndPasswordInForm, (req, res) => {

    const credentials = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    req.body.password = hash;


    usersModel.updateUserById(req.params.user_id, req.body)
        .then(user => {
            res.status(200).json({ message: "User was successfully updated!" })
        })
        .catch(() => {
            res.status(500).json({ message: "User could not be updated by the database." })
        })
})

// get users plants
router.get("/:user_id/users-plants", checkUserIdExists, (req, res) => {
    const { user_id } = req.params;
    plantsModel.getPlantsByUserId(user_id)
        .then((plants) => {
            res.status(200).json(plants);
        })
        .catch(() => {
            res.status(500).json({ message: "Users Plants could not be retrieved by the database." })
        })
},
);



//export the router
module.exports = router