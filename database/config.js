require('dotenv').config() // require and config dotenv to access variables below

// connecting to the pgsql database with enviroment variables
// based on this article: https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/
module.exports = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
}