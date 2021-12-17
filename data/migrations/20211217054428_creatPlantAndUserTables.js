
exports.up = function (knex) {
    return knex.schema
        .createTable("users", (users) => {
            users.increments("user_id");
            users.string("firstName").notNullable();
            users.string("lastName").notNullable();
            users.string("username", 64).notNullable().unique();
            users.string("password").notNullable();
            users.string("phoneNumber").notNullable();
        })
        .createTable("plants", (plants) => {
            plants.increments("plantId");
            plants.string("nickname").notNullable();
            plants.string("species").notNullable();
            plants.string("h2OFrequency").notNullable();
            plants.string("howMuchWater")
            plants.string("details")
            // plants.url("image")
            plants.integer("owner") //owner (user id) refers to users user_id --foreign key
                .unsigned()
                .notNullable()
                .references("user_id")
                .inTable("users") // user_id is referenced from users table
                .onUpdate("CASCADE")
                .onDelete("CASCADE");

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('users')
};
