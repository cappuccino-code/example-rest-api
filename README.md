# P.O.C Testing - RESTful API and Data Persistance

## Status: INCOMPLETE

## Technologies Used:

- [x] Node
- [x] Express
- [x] PostgresSQL (pgsql) - Relational Database
- [ ] (optional) MySQL
- [ ] Docker - when implemented will create the Databse
- [ ] User Authentication (JWT)
- [ ] Logs
- [ ] Enviroment Variables

## Packages Used:

- Express
- node-postgres (pg)
- body-parser
- dotenv
- nodemon (--save-dev)

## To Do:

- [ ] only create tables if they do not exist
- [ ] create a drop script for all tables with the specified name
- [ ] create a test script to check if all routes are working
- [ ] start adding middleware to test

## Commands to Run:

```shell
# To Start:
npm start
```

## Steps to Install PostgresSQL (Version 12):

- Once Docker is setup we may not need to do this, still testing

- Link: https://www.postgresql.org/download/macosx/

> When you install the database make sure you install it with the following credentials - Port: 5432, Password: password, User: postgres. Some of these may just be by default so don't worry if they don't pop up while installing.
> Once Installed open your pgAdmin and create a database
