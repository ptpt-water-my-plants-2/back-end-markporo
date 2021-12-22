const db = require("../db-config")


function getAllUsers() {
    return db('users as u')
        .select("u.user_id", "u.firstName", "u.lastName", "u.username", "u.phoneNumber")
        .orderBy('user_id')
}

function getUserById(user_id) {
    return db('users as u')
        .where({ user_id }) //.where('user_id', user_id)
        //send back everything but the password
        .select("u.user_id", "u.firstName", "u.lastName", "u.username", "u.phoneNumber")

    // this could be destructured so its not inside of an array
    // but I am leaving it because I already coded the front end
    // to get the data out of the array

}

function getUserByFilter(filter) {
    return db('users')
        .where(filter)
}

async function addUser(user) {
    // return db('users')
    //     .insert(user)
    //     .then(userResult => {
    //         return getUserById(userResult[0]) // should return new user
    //     })
    const [user_id] = await db('users').insert(user).returning('user_id')

    return getUserById(user_id)
}

function updateUserById(user_id, changes) {
    return db('users')
        .where('user_id', user_id)
        .update(changes)
        .then(data => {
            return getUserById(user_id) // should show user with updates
        })

}

function deleteUserById(user_id) {
    return db('users')
        .where('user_id', user_id)
        .del()
        .then(result => {
            return result  // should show how many users were deleted
        })
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
    getUserByFilter
}