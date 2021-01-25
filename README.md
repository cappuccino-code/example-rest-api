# P.O.C Testing - RESTful API and Data Persistance

## Status: INCOMPLETE

## Technologies Used/ Tested:

- [x] Node
- [x] Express
- [x] PostgresSQL (pgsql) - Relational Database
- [ ] (optional) MySQL
- [x] Docker - when implemented will create the Databse # Based on https://hub.docker.com/_/postgres
- [ ] User Authentication (JWT)
- [ ] Logs
- [x] Enviroment Variables

## Packages Used:

- Express
- node-postgres (pg)
- body-parser
- dotenv
- nodemon (--save-dev)
- helmet
- cors

## To Do:

- [x] dockerize database image to avoid installing postgres on every machine
- [ ] only return the .rows entry from the database responses
- [ ] add pgadmin to the docker image to interact with the database (to query database without installing postgres)
- [ ] look into using the sequelize package: https://sequelize.org/master/manual/getting-started.html
- [x] only create tables if they do not exist | add line DROP TABLE IF EXISTS name
- [x] ~~create a drop script for all tables with the specified name~~ Will jsut delete tables with the above line for now
- [ ] create a test script to check if all routes are working
- [x] start adding middleware to test (sanitization, security)
- [ ] add encrypted passwords for users (bcrypt, JWT auth)
- [ ] add logging support from packages like winston or debug

## Steps to Run:

1. run the command 'npm i' to install all dependancies
   ~~2. install postgres sql following the instructions below~~ Removed, now done through docker
2. run the commands needed to start

## Commands to Run:

```shell
# To Start:
npm i
docker-compose up -d
npm start
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
