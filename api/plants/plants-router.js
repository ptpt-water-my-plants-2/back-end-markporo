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
router.post("/", validatePlantCredentials, (req, res) => {
    plantsModel.addPlant(req.body)
        .then(newPlant => {
            res.status(201).json(newPlant)
        })
        .catch(() => {
            res.status(500).json({ message: "The Plant could not be added to the Database" })
        })
})


//  update plant by id
router.put("/:plantId", checkPlantIdExists, validatePlantCredentials, (req, res) => {
    plantsModel.updatePlant(req.params.plantId, req.body)
        .then(updatedPlant => {
            res.status(200).json(updatedPlant)
        })
        .catch(() => {
            res.status(500).json({ message: "The Plant could not be updated in the Database" })
        })
})


// delete plant by Id
router.delete("/:plantId", checkPlantIdExists, (req, res) => {
    plantsModel.deletePlant(req.params.plantId)
        .then(deletedPlant => {
            res.status(200).json({ message: "Plant was successfully deleted! Goodbye dear Plant.  You will be missed." })
        })
        .catch(() => {
            res.status(500).json({ message: "The plant could not be deleted from the Database" })
        })
})








module.exports = router