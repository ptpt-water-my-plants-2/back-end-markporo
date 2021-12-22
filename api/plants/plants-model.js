const db = require("../db-config")



//get plants by user Id
const getPlantsByUserId = (user_id) => {
    return db("plants as p")
        .select("p.plantId", "p.nickname", "p.species", "p.h2OFrequency", "p.howMuchWater", "p.details")
        .join("users as u", "p.owner", "=", "u.user_id")
        .where("p.owner", user_id)
        .orderBy("p.plantId", "desc")
}

// { nickname: "Azalea", species: "Rhododendron", h2OFrequency: 12, howMuchWater: "", details: "", owner: "1" },
// { nickname: "Spider Plant", species: "Chlorophytum comosum", h2OFrequency: 7, howMuchWater: "", details: "", owner: "2" },
// { nickname: "Succulent Plant", species: "succulents", h2OFrequency: 2, howMuchWater: "", details: "", owner: "4" },
// { nickname: "aloe there", species: "aloe vera", h2OFrequency: 21, howMuchWater: "", details: "", owner: "3" },
// { nickname: "Snake Plant", species: "Dracaena trifasciata", h2OFrequency: 14, howMuchWater: "", details: "", owner: "5" },
// ]);


//get plant by plant Id
const getPlantByPlantId = (plantId) => {
    return db("plants as p")
        .where({ plantId })
        .first()
}


// create a plant
async function addPlant(newPlant) {
    const [plantId] = await db('plants').insert(newPlant).returning('plantId')
    return getPlantByPlantId(plantId)
}


//  update plant by id
async function updatePlant(plantId, changes) {
    const updatedPlant = await db("plants as p").where({ plantId }).update(changes)
    console.log(updatedPlant)

    return getPlantByPlantId(plantId)
}
// delete plant by Id
const deletePlant = (plantId) => {
    return db('plants').where({ plantId }).del()
}







module.exports = { getPlantsByUserId, getPlantByPlantId, addPlant, updatePlant, deletePlant }