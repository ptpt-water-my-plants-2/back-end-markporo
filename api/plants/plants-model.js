const db = require("../db-config")



//get plants by user Id
const getPlantsByUserId = (user_id) => {
    return db("plants as p")
        .select("p.nickname", "p.species", "p.h2OFrequency", "p.howMuchWater", "p.details")
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



// create a plant



// delete plant by Id



//  update plant by id



module.exports = { getPlantsByUserId }