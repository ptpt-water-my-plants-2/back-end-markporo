const usersModel = require("../users/users-model")
const jwt = require('jsonwebtoken')

const validateCredentails = async (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.username || !req.body.password || !req.body.phoneNumber) {
        return res.status(400).json({ message: "All text fields required" })
    } else if (req.body.password.length < 4) {
        return res.status(400).json({ message: "Password must be 4 characters or longer" })
    } else if (req.body.phoneNumber.length < 7 || req.body.phoneNumber.length > 11) {
        return res.status(400).json({ message: "Phone Number must contain lenghth of a phone number" })
    } else {
        req.body.username = req.body.username.trim();
        req.body.password = req.body.password.trim();
        req.body.phoneNumber = req.body.phoneNumber.trim();
        next()
    }
}

const validateCredentailsForLogin = async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ message: "All text fields required" })
    } else if (req.body.password.length < 4) {
        return res.status(400).json({ message: "Password must be 4 characters or longer" })
    } else {
        next()
    }
}


function authenticateTokenRestrictedAccess(req, res, next) {
    // const authHeader = req.headers['authorization']  
    // const token = authHeader && authHeader.split(' ')[1] // Bearer token --gets token from authorization header

    const token = req.headers.authorization

    if (!token) return res.sendStatus(401).json({ message: "token not found" })
    jwt.verify(token, process.env.JWT_Secret, (err, decodedToken) => {
        if (err) return res.sendStatus(403).json({ message: "You do not have access" })
        req.decodedToken = decodedToken
        next()
    })
}


const validatePhoneNumberAndPasswordInForm = async (req, res, next) => {
    if (!req.body.phoneNumber || !req.body.password) {
        return res.status(400).json({ message: "Phone Number and Password fields are required" })
    } else if (req.body.password.length < 4) {
        return res.status(400).json({ message: "Password must be 4 characters or longer" })
    } else if (req.body.phoneNumber.length < 7 || req.body.phoneNumber.length > 11) {
        return res.status(400).json({ message: "Phone Number must contain lenghth of a phone number" })
    } else {
        req.body.phoneNumber = req.body.phoneNumber.trim();
        req.body.password = req.body.password.trim();
        next()
    }
}

const checkUsernameAvailable = async (req, res, next) => {
    const username = req.body.username
    const [userFound] = await usersModel.getUserByFilter({ username: username })
    if (userFound) {
        return res.status(401).json({ message: "That username is already taken." })
    }
    next()
}

const checkUserIdExists = async (req, res, next) => {
    usersModel.getUserById(req.params.user_id)
        .then(user => {
            if (user.length === 0) {
                return res.status(404).json({ message: "User with that ID not found." })
            } else {
                next()
            }
        })
}

const checkUserNameExists = async (req, res, next) => {
    const [userFound] = await usersModel.getUserByFilter({ username: req.body.username })
    if (userFound) {
        next()
    } else {
        return res.status(404).json({ message: "Username or password does is not correct" })
    }
}




module.exports = {
    checkUsernameAvailable,
    validateCredentails,
    validatePhoneNumberAndPasswordInForm,
    checkUserIdExists,
    validateCredentailsForLogin,
    checkUserNameExists,
    authenticateTokenRestrictedAccess
}