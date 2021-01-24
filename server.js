'use strict'
require('dotenv').config() // require and config dotenv to access variables below


// setting up CRUD API with express and pg
// based on this article: https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.API_PORT || 3000 // default to port 3000 if not specified
const userRoutes = require('./routes/users')
require('./database/startup.js')(); //IIFE use of the require statement

// index route for the api
app.use(bodyParser.json())
app.get('/', (request, response) => {
    response.json({
        info: 'Welcome to the CRUD API P.O.C. Testing',
        tech: [
            'Node',
            'Express',
            'PostgresSQL',
            'Environment Variables'
        ]
    })
})

// bind the user routes to our API
app.get('/users', userRoutes.getUsers)
app.get('/users/:id', userRoutes.getUserById)
app.post('/users', userRoutes.createUser)
app.put('/users/:id', userRoutes.updateUser)
app.delete('/users/:id', userRoutes.deleteUser)

// set the server to start and listen on the specified port
app.listen(port, () => console.log(`Server is running on PORT: ${port}`))