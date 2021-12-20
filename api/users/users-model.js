const db = require("../db-config")


function getAllUsers() {
    return db('users').orderBy('user_id')
}

function getUserById(user_id) {
    return db('users')
        .where({ user_id }) //.where('user_id', user_id)

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