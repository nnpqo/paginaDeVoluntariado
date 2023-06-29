require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const publicacionController = require("./app/controllers/publicacionController.js");
const loginController = require("./app/controllers/loginController.js");
const homeController = require("./app/controllers/homeController.js");
const registerController = require("./app/controllers/registerController.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

app.use(cors());

var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.redirect("/login");
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: ", err);
    return;
  }
  console.log("Conexión a la base de datos establecida");
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));


app.use("/publicacion", publicacionController);

app.use("/login", loginController);

app.use("/login/home", homeController);

app.use("/register", registerController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
