
const express = require("express");
const router = express.Router();
const publicacionModel = require("../models/publicacionModel.js");

router.post("/create", async (req, res) => {
  const { nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios } = req.body;

  const date = {
    fechaInicio:"2023-06-02",
    horaActividad:"00:45",
    fechaFin:"2023-06-02",
    ubicacionA: "Zona Quillacollo"
  }

  try {
    const result = await publicacionModel.crearPublicacion(nombrePublicacion, descripcion, tipoPublicacion, date.fechaInicio, date.horaActividad, date.fechaFin, date.ubicacionA, cantidadVoluntarios);
    res.send("Publicación registrada con éxito");
  } catch (err) {
    console.error("Error al crear la publicación: ", err);
    res.status(500).send("Error al crear la publicación");
  }
});

router.get("/eventos", async (req, res) => {
  try {
    const eventos = await publicacionModel.obtenerPublicacionesPorTipo("evento");
    res.render("eventos", { eventos });
  } catch (err) {
    console.error("Error al obtener las publicaciones de tipo 'evento':", err);
    res.status(500).send("Error al obtener las publicaciones de tipo 'evento'");
  }
});

router.get("/", (req, res) => {
  res.render("publicacion");
});

router.get("/voluntarios", (req, res) => {
  res.render("verVoluntario");
});

router.get("/comunicados", (req, res) => {
  res.render("comunicados");
});

module.exports = router;
