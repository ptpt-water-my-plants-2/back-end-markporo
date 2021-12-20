const router = require("express").Router()
const plantsModel = require("./plants-model")
const { checkPlantIdExists, validatePlantCredentials } = require("./plant-middleware")

//get plant by plant Id
router.get("/:plantId", checkPlantIdExists, (req, res) => {
    plantsModel.getPlantByPlantId(req.params.plantId)
        .then(plant => {
            res.status(200).json(plant)
        })
        .catch(() => {
            res.status(500).json({ message: "The plant requested could not be retrieved by the Database" })
        })
})


// create a plant
// router.addPlant("/", validatePlantCredentials, (req, res) => {

// })


// delete plant by Id



//  update plant by id






module.exports = router