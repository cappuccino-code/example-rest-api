require('dotenv').config() // require and config dotenv to access variables below

// destructure out the needed env variables
const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_PORT,
} = process.env
// connecting to the pgsql database with enviroment variables
// based on this article: https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/
module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASS,
        database: 'exAPI_dev',
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres'
    },
    test: {
        username: DB_USER,
        password: DB_PASS,
        database: 'exAPI_test',
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres'
    },
    production: {
        username: DB_USER,
        password: DB_PASS,
        database: 'exAPI_prod',
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres'
    }
}