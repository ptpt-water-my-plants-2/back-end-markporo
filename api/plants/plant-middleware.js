const plantsModel = require("./plants-model")


const checkPlantIdExists = async (req, res, next) => {
    plantsModel.getPlantByPlantId(req.params.plantId)
        .then(plant => {
            if (!plant) {
                res.status(404).json({ message: "No plant found with that ID" })
            } else {
                next()
            }
        })
}

const validatePlantCredentials = (req, res, next) => {
    if (!req.body.nickname || !req.body.h2OFrequency || !req.body.species) {
        res.satus(400).json({ message: "Form has missing credentials" })
    } else {
        next()
    }
}









module.exports = { checkPlantIdExists, validatePlantCredentials }