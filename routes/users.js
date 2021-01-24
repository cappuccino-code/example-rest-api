const { Pool } = require('pg')
const router = require('express').Router()

// functions to create/ return PSQL queries to modify the user
const createUserQuery = (email, firstName, lastName, age) => {
    return `
    INSERT INTO users (email, firstName, lastName, age)
    VALUES('${email}', '${firstName}', '${lastName}', ${age})
    `
}

// get the databse pool
const databaseConfig = require('../database/config')
const pool = new Pool(databaseConfig)

// USER routes:
// GET all users
const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC')
        .then(result => res.status(200).json(result).send())
        .catch(err => console.error(err))
}

// GET single user with specified ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    // example of using node-postgres to insert the values for us
    pool.query('SELECT * FROM users WHERE id = $1', [id])
        .then(result => res.status(200).json(result))
        .catch(err => console.error(err))
}

// POST new user
const createUser = (req, res) => {
    console.log(req.body)
    const { email, firstName, lastName, age } = req.body

    pool.query(createUserQuery(email, firstName, lastName, age))
        .then(result => res.status(200).json(result))
        .catch(err => console.error(err))
}

// PUT data into existing user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { firstName, lastName, email, age } = req.body

    // exmaple of using JS string interpolation in query
    pool.query(`
    UPDATE users 
    SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', age = ${age}
    WHERE id = ${id}
    `)
        .then(() => res.status(200).send(`USER with ID: ${id} was modified`))
        .catch(err => console.error(err))
}

// DELETE a user with specified id
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

    // example of using node-postgres to insert the values for us
    pool.query('DELETE FROM users WHERE id = $1', [id])
        .then(result => res.status(200).json(result))
        .catch(err => console.error(err))
}

// export all the user functions out
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}