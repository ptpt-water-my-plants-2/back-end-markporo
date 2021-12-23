const router = require("express").Router();
const usersModel = require("../users/users-model")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/token-builder")

const { checkUsernameAvailable, validateCredentails, checkUserNameExists, validateCredentailsForLogin, checkForToken } = require('../auth/auth-middleware');



// register
router.post("/register", validateCredentails, checkUsernameAvailable, async (req, res) => {
    const credentials = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    credentials.password = hash;

    usersModel.addUser(credentials)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(() => {
            res.status(500).json({ message: "The user could not be added by the Data base" })
        })
})


//login
router.post("/login", validateCredentailsForLogin, checkUserNameExists, async (req, res) => {
    const { username, password } = req.body;
    const [user] = await usersModel.getUserByFilter({ username: username });

    if (user && !bcrypt.compareSync(password, user.password)) {
        res.status(403).json({ message: "Incorrect password" });
    } else if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
            message: `Successful login! Welcome ${user.username}!`,
            user_id: `${user.user_id}`,
            token,
        });
    } else {
        res.status(500).json({ message: "The user could not be logged in by the Data base" })

    }
},
);

// endpoint that checks for token and keeps user logged in after browser closes
router.post("/", checkForToken, (req, res) => {
    console.log(req.decodedToken, "decoded Token")
})


module.exports = router