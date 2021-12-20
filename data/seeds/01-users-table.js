
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { firstName: "Ryan", lastName: "Reynolds", username: "rr", phoneNumber: "8675309", password: "$2a$08$OKyUI5WO4OIqcoBOj0wIC.MlFrEk4tdIHrf/OGbThHbnUDRzsWgQG" },
        { firstName: "Dwight", lastName: "Schrute", username: "dwight", phoneNumber: "8675309", password: "$2a$08$OKyUI5WO4OIqcoBOj0wIC.MlFrEk4tdIHrf/OGbThHbnUDRzsWgQG" },
        { firstName: "Tony", lastName: "Lu", username: "tlu", phoneNumber: "8675309", password: "$2a$08$OKyUI5WO4OIqcoBOj0wIC.MlFrEk4tdIHrf/OGbThHbnUDRzsWgQG" },
        { firstName: "Coolguy", lastName: "Steve", username: "stevedude", phoneNumber: "8675309", password: "$2a$08$OKyUI5WO4OIqcoBOj0wIC.MlFrEk4tdIHrf/OGbThHbnUDRzsWgQG" },
        { firstName: "Mark", lastName: "Poro", username: "markporo", phoneNumber: "8675309", password: "$2a$08$OKyUI5WO4OIqcoBOj0wIC.MlFrEk4tdIHrf/OGbThHbnUDRzsWgQG" },
      ]);
    });
};
