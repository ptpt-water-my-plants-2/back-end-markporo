const router = require('express').Router()

const usersModel = require('./users-model')
const { validatePhoneNumberAndUsernameInForm, checkUserIdExists } = require('../auth/auth-middleware')


router.get("/", (req, res) => {
    usersModel.getAllUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({ message: "Users could not be retrieved by Database." })
        })
})


router.get("/:user_id", checkUserIdExists, (req, res) => {
    usersModel.getUserById(req.params.user_id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(() => {
            res.status(500).json({ message: "The User requested could not be retrieved by the Database" })
        })
})


// update user ---finish this
router.put("/:user_id", validatePhoneNumberAndUsernameInForm, (req, res) => {
    usersModel.updateUserById(req.params.user_id, req.body)
        .then(user => {
            res.status(200).json({ message: "User was successfully updated!" })
        })
        .catch(() => {
            res.status(500).json({ message: "User could not be updated by the database." })
        })
})

// get users plants

//export the router
module.exports = router