// the queries needed to create the user:
// could these be changed to .psql files? Need to look into
// queries must end with a semicolan
module.exports = `
CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`