const jwt = require("jsonwebtoken")
require("dotenv").config()
const secret = process.env.JWT_Secret || "lambdavsbloomtech"

module.exports = function (user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret, options)
}
