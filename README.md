# Skills Guild: P.O.C Testing - RESTful API and Data Persistance

## Status: COMPLETE

## Technologies Used/ Tested:

- [x] Node
- [x] Express
- [x] PostgresSQL (pgsql) - Relational Database
- [x] Docker - when implemented will create the Databse # Based on https://hub.docker.com/_/postgres
- [x] User Authentication (JWT) - Handled by Firebase Admin
- [x] Logs
- [x] Enviroment Variables

## Packages Used:

- Express
- node-postgres (pg)
- body-parser
- dotenv
- nodemon (--save-dev)
- helmet
- cors
- bcrypt password/ JWT encryption
- pg-hstore (needed for sequelize)
- sequelize (use Javascript instead of SQL to communicate with Database)
- sequelize-cli (--save-dev) useful command line tools for development

## To Do:

- [x] dockerize database image to avoid installing postgres on every machine
- [x] only return the .rows entry from the database responses
- [ ] add pgadmin to the docker image to interact with the database (to query database without installing postgres)
- [x] look into using the sequelize package: https://sequelize.org/master/manual/getting-started.html
- [x] only create tables if they do not exist | add line DROP TABLE IF EXISTS name
- [x] ~~create a drop script for all tables with the specified name~~ Will jsut delete tables with the above line for now
- [x] create a test script to check if all routes are working
- [x] start adding middleware to test (sanitization, security)
- [x] add ~~encrypted passwords for users (bcrypt, JWT auth)~~ Firebase Authentication (supports JWT, encryption, multi-factor authentication)
- [x] add logging support from packages like winston ~~or debug~~~

## Steps to Run:

1. run the command 'npm i' to install all dependancies
   ~~2. install postgres sql following the instructions below~~ Removed, now done through docker
2. run the commands needed to start

## Commands to Run:

```shell
# To Start:
npm i
docker-compose up -d # to create database image
# make sure .env file is set with the password variable
npm run db:create # to create the databases specified in database/config.js
npm start
```

> Then using an application like Postman you can create a json object like below and test the POST route with an object creation and then test the other routes to confirm successful set up.
> ![alt Image showing the successful postman submission of a JSON object](https://github.com/cappuccino-code/example-rest-api/blob/main/images/postman-POST-test.png)
> ![alt Image showing unauthorized access to the api using firebase admin](https://github.com/cappuccino-code/example-rest-api/blob/main/images/postman-UNAUTHORIZED-test.png)

## API Routes:

> example: locahost:300/users

- HOST:PORT/users GET POST
- HOST:PORT/users/:id GET PUT DELETE
- Example JSON object for the User Routes, there is no security for routes

```json
{
  "email": "email@email.ca",
  "firstName": "First",
  "lastName": "Last",
  "age": 26,
  "password": "somePassword"
}
```

## Commands to Remember:

```shell
# initiallize sequlize folder structure conviently with the following command
# creates the folders for /config /models /migrations /seeders
npx sequelize-cli init

# create a model, names user with the attributes firstName, lastName and Email, this
# format can be used to create the starter model file for any data structure
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# run all migrations that were generated from new models or attributes
npx sequelize-cli db:migrate
npx sequelize-cli migration:generate --name NAME # create a starter migration file for a new column

# to create seeder files (seeders will be used to create initla/ test data for the database)
# useful during development but not needed for the final product
sequelize-cli seed:generate --name NAME # create the starter seed file with the name specified
sequelize-cli db:seed:all # run all sedder files
```

## Steps to Install PostgresSQL (Version 12):

- Once Docker is setup we may not need to do this, still testing

- Link: https://www.postgresql.org/download/macosx/

> When you install the database make sure you install it with the following credentials - Port: 5432, Password: password, User: postgres. Some of these may just be by default so don't worry if they don't pop up while installing.
> Once Installed open your pgAdmin and create a database

## Helmet Explanation:

> helmet adds the following security:

- contentSecurityPolicy
- dnsPrefetchControl
- expectCt
- frameguard
- hidePoweredBy
- hsts
- ieNoOpen
- noSniff
- permittedCrossDomainPolicies
- referrerPolicy
- xssFilter
