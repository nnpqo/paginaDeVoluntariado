const express = require("express");
const router = express.Router();
const loginModel = require("../models/userModel.js");

router.post("/create", async (req, res) => {
  const { codigoVoluntario, nombre, contrasenia } = req.body;

  try {
    const result = await usuarioModel.crearUsuario(
      codigoVoluntario,
      nombre,
      contrasenia
    );
    res.send("Usuario creado con éxito");
  } catch (err) {
    console.error("Error al crear el usuario: ", err);
    res.status(500).send("Error al crear el usuario");
  }
});

router.post("/getUsuarioPorCodigo/:codigo/:contrasenia", async (req, res) => {
  const codigo = req.params.codigo;
  const contrasenia = req.params.contrasenia;
  loginModel.getUsuarioLogin(codigo, contrasenia).then((usuario) => {
    if (usuario[0]) {
      res.json({login: true});
    } else {
      res.json({login: false});
    }
  });
});

router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
