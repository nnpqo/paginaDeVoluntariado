
const express = require("express");
const router = express.Router();
const db = require('../../config/db.js');

function obtenerPublicaciones() {
  return [
    { id: 1, titulo: "Publicación 1" },
    { id: 2, titulo: "Publicación 2" },
    { id: 3, titulo: "Publicación 3" }
  ];
}

router.post("/create", (req, res) => {
  const { nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios } = req.body;

  const query = `INSERT INTO publicacion(nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) VALUES (?,?,?,?)`;
  db.query(query, [nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios], (err, result) => {
    if (err) {
      console.error("Error al crear la publicación: ", err);
      res.status(500).send("Error al crear la publicación");
    } else {
      res.send("Publicación registrada con éxito");
    }
  });
});

router.get("/", (req, res) => {
  const publicaciones = obtenerPublicaciones(); 
  res.render("publicacion", { publicaciones });
});
  
module.exports = router;
