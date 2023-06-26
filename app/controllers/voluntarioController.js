
const express = require("express");
const router = express.Router();
const publicacionModel = require("../models/voluntarioModel.js");

router.post("/create", async (req, res) => {
  const { codVoluntario,tipoUsuario, nombreU, contraseniaU } = req.body;

  try {
    const result = await voluntarioModel.crearUsuario(codVoluntario, tipoUsuario, nombreU, contraseniaU );
    res.send("Usuario registrado con éxito");
  } catch (err) {
    console.error("Error al registrar un usuario: ", err);
    console.log(err);
    res.status(500).send("Error al registrar un usuario");
  }
});

router.get("/", (req, res) => {
  res.render("usuario");
});

module.exports = router;
