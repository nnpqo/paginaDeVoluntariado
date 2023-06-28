const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("logout", {
        loggedIn: false,
        loggedInUserData: req.session.loggedInUserData,
    });
});

router.get("/", async (req, res) => {
    res.render("signup", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

router.get("/", async (req, res) => {
    res.render("login", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});
app.get("/users", (req, res) => {
    res.send("devolver la lista de usuarios");
});

app.post("/users", (req, res) => {
    res.send("respuesta distinta por vía post");
});

module.exports = router;