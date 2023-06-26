
const express = require("express");
const router = express.Router();
const publicacionModel = require("../models/publicacionModel.js");

router.post("/create", async (req, res) => {
  const { nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios } = req.body;

  try {
    const result = await publicacionModel.crearPublicacion(nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios);
    res.send("Publicación registrada con éxito");
  } catch (err) {
    console.error("Error al crear la publicación: ", err);
    console.log(err);
    res.status(500).send("Error al crear la publicación");
  }
});

router.get("/", (req, res) => {
  res.render("publicacion");
});

module.exports = router;
