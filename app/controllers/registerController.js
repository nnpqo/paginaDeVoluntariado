
const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel.js");


router.post("/create", async (req, res) => {
    const { codigoVoluntario, nombre, contrasenia } = req.body;
  
    try {
      const result = await userModel.crearVoluntario(codigoVoluntario, nombre, contrasenia);
      res.send("Usuario creado con éxito");
    } catch (err) {
      console.error("Error al crear el usuario: ", err);
      res.status(500).send("Error al crear el usuario");
    }
});

router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;