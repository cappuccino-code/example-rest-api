'use strict'
require('dotenv').config() // require and config dotenv to access variables below
const db = require('./models') // the databse and its connection is in the /models/index.js
const userRoutes = require('./routes/users')
const logger = require('./config/logger.js')
const errorLogger = require('./middleware/errorLogger');
// setting up CRUD API with express and sequelize
// based on these articles:
// https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
// https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
// https://sequelize.org/master/manual/model-basics.html#synchronizing-all-models-at-once
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const helmet = require('helmet');
const port = process.env.API_PORT || 3000 // default to port 3000 if not specified

//initialize all middleware and the index route for the api
app.use(bodyParser.json())
app.use(helmet())
app.use(errorLogger)
app.get('/', (request, response) => {
    response.json({
        info: 'Welcome to the CRUD API P.O.C. Testing',
        tech: [
            'Node',
            'Express',
            'PostgresSQL',
            'Environment Variables',
            'Docker',
            'Security Middleware',
            'Sequelize ORM'
        ]
    })
})

// bind the user routes to our API using the module exports function
userRoutes(app, db) // would be the same as import users from './routes/users'

// sync the databse connection then start the app
db.sequelize.sync({ force: true }) // force the sync and drop existing tables
    // start the server with app.listen and its callback function 
    .then(() => logger.log('database', `Database connection established`))
    .then(() => app.listen(port, () => logger.log('info', `Server is running on PORT: ${port}`)))
    .catch(err => {
        logger.log('database', 'Error Connecting to the databse', err)
        process.exit(1)
    })

