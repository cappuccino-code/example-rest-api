const userQuery = require('../models/userQuery')
const { Client } = require('pg')
const client = new Client(require('./config'))

module.exports = () => {
    // connect to the database
    client.connect()
        .then(() => console.log(`Connected to Database: ${process.env.DB_NAME}`))
        .catch(err => {
            // log the error and exit gracefully
            console.error(err)
            process.exit(1)
        })

    // run any queries needed to create the database
    client.query(userQuery)
        .then(res => console.log('User Table was Successfully Created'))
        .catch(err => console.error(err))
        .finally(() => client.end())
}


