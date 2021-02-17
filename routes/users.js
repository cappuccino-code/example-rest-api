const checkIfAuthenticated = require('../middleware/checkIfAuthenticated')

module.exports = (app, db) => {
    app.get("/users", (req, res) =>
        db.users.findAll().then((result) => res.json(result))
    );

    app.get("/users/:id", checkIfAuthenticated, (req, res) =>
        db.users.findByPk(req.params.id).then((result) => res.json(result))
    );

    app.post("/users", (req, res) =>
        db.users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }).then((result) => res.json(result))
    );

    app.put("/users/:id", checkIfAuthenticated, (req, res) =>
        db.users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        },
            {
                where: {
                    id: req.params.id
                }
            }).then((result) => res.json(result))
    );

    app.delete("/users/:id", checkIfAuthenticated, (req, res) =>
        db.users.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    );
}