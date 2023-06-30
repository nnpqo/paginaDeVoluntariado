
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

router.get("/getUsers", async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.send(users);
  
  } catch (err) {
    console.error("Error al recuperar los usuarios: ", err);
    res.status(500).send("Error al recuperar los usuarios");
  }
});

router.get("/", (req, res) => {
  res.render("register");
});
router.get("/", (req, res) => {
  res.render("eliminarUsuarioPorCodigo");
});

router.post("/eliminarUsuarioPorCodigo/:codigo", async (req, res) => {
  const codigo = req.params.codigo;

  try {
    const usuario = await userModel.obtenerVoluntarioPorCodigo(codigo);

    if (usuario) {
      // Usuario encontrado, procede a eliminarlo
      await userModel.eliminarVoluntarioPorCodigo(codigo);
      res.json({ success: true, message: "Usuario eliminado correctamente" });
    } else {
      // Usuario no encontrado
      res.json({ success: false, message: "El usuario no existe" });
    }
  } catch (err) {
    console.error("Error al eliminar el usuario: ", err);
    res.status(500).json({ success: false, message: "Error al eliminar el usuario" });
  }
});

module.exports = router;