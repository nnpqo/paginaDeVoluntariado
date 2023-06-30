require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const publicacionController = require("./app/controllers/publicacionController.js");
const loginController = require("./app/controllers/loginController.js");
const homeController = require("./app/controllers/homeController.js");
const registerController = require("./app/controllers/registerController.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

app.use(cors());

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/voluntarios", (req, res) => {
  res.render("verVoluntario");
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));

app.use("/", publicacionController);
app.use("/home", homeController);
app.use("/login", loginController);
app.use("/login/home", homeController);
app.use("/register", registerController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
