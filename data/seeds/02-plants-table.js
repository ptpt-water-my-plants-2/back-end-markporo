
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { nickname: "Azalea", species: "Rhododendron", h2OFrequency: 12, howMuchWater: "", details: "", owner: "1" },
        { nickname: "Spider Plant", species: "Chlorophytum comosum", h2OFrequency: 7, howMuchWater: "", details: "", owner: "2" },
        { nickname: "Succulent Plant", species: "succulents", h2OFrequency: 2, howMuchWater: "", details: "", owner: "4" },
        { nickname: "aloe there", species: "aloe vera", h2OFrequency: 21, howMuchWater: "", details: "", owner: "3" },
        { nickname: "Snake Plant", species: "Dracaena trifasciata", h2OFrequency: 14, howMuchWater: "", details: "", owner: "5" },
      ]);
    });
};
