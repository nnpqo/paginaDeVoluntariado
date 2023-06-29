
const express = require("express");
const router = express.Router();
const loginModel = require("../models/registerModel.js");

router.post("/create", async (req, res) => {
    const { codigoVoluntario, nombre, contrasenia } = req.body;
  
    try {
      const result = await registerModel.crearUsuario(codigoVoluntario, nombre, contrasenia);
      res.send("Usuario creado con éxito");
    } catch (err) {
      console.error("Error al crear el usuario: ", err);
      res.status(500).send("Error al crear el usuario");
    }
  });
  
  router.get("/getUsuarioPorCodigo/:codigo", async (req, res) => {
    const { codigo } = req.params;
  
    try {
      const usuario = await registerModel.obtenerVoluntarioPorCodigo(codigo);
      res.json(usuario);
    } catch (err) {
      console.error("Error al obtener el usuario:", err);
      res.status(500).send("Error al obtener el usuario");
    }
  });
  
router.get("/", (req, res) => {
  res.render("register");
});


module.exports = router;