const usersModel = require("../users/users-model")

const validateCredentails = async (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.username || !req.body.password || !req.body.phoneNumber) {
        res.status(400).json({ message: "All text fields required" })
    } else if (req.body.password.length < 4) {
        res.status(400).json({ message: "Password must be 4 characters or longer" })
    } else if (req.body.phoneNumber.length < 7 || req.body.phoneNumber.length > 11) {
        res.status(400).json({ message: "Phone Number must contain lenghth of a phone number" })
    } else {
        req.body.username = req.body.username.trim();
        req.body.password = req.body.password.trim();
        next()
    }
}

const restricted = async (req, res, next) => {

}


const validatePhoneNumberAndUsernameInForm = async (req, res, next) => {
    next()
}

const checkUsernameAvailable = async (req, res, next) => {
    const username = req.body.username
    const [userFound] = await usersModel.getUserByFilter({ username: username })
    if (userFound) {
        res.status(401).json({ message: "That username is already taken." })
    }
    next()
}

const checkUserIdExists = async (req, res, next) => {
    usersModel.getUserById(req.params.user_id)
        .then(user => {
            if (user.length === 0) {
                res.status(404).json({ message: "User with that ID not found." })
            } else {
                next()
            }
        })
}




module.exports = {
    checkUsernameAvailable,
    validateCredentails,
    restricted,
    validatePhoneNumberAndUsernameInForm,
    checkUserIdExists
}