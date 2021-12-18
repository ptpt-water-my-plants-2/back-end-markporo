const router = require("express").Router();
const usersModel = require("../users/users-model")
const { checkUsernameAvailable, validateCredentails, restricted, checkUsernameExists, checkUserIdExists } = require('../auth/auth-middleware')


// register
router.post("/register", validateCredentails, checkUsernameAvailable, (req, res) => {
    usersModel.addUser(req.body)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(() => {
            res.status(500).json({ message: "The user could not be added by the Data base" })
        })
})


//login


module.exports = router