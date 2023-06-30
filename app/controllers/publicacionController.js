const express = require("express");
const router = express.Router();
const publicacionModel = require("../models/publicacionModel.js");

router.post("/create", async (req, res) => {
  const {
    nombrePublicacion,
    descripcion,
    tipoPublicacion,
    cantidadVoluntarios,
  } = req.body;
  console.log(req.body);
    const result = await publicacionModel.crearPublicacion(
      nombrePublicacion,
      descripcion,
      tipoPublicacion,
      cantidadVoluntarios
    ).then((data) => {
      console.log(data);
      res.send("Publicación registrada con éxito");
    }).catch(err => {
      console.log(err);
      res.send("Error al registrar la publicación");
    });
});

router.get("/getAllPublicaciones", async (req, res) => {
  try {
    const publicaciones = await publicacionModel.getAllPublicaciones();
    res.send(publicaciones);
  
  } catch (err) {
    console.error("Error al recuperar las publicaciones: ", err);
    res.status(500).send("Error al recuperar las publicaciones");
  }
});

router.get('/eventos', (req, res) => {
  res.render('eventos');
})

router.get("/", (req, res) => {
  res.render("eliminarPublicacionPorTipo");
});

router.delete("/eliminarPublicacionPorTipo/:tipoPublicacion", async (req, res) => {
  const codigo = req.params.codigo;
  const tipoPublicacion = req.params.tipoPublicacion; // Agrega esta línea para obtener el valor de tipoPublicacion

  try {
    const publicacion = await publicacionModel.obtenerPublicacionPorTipo(tipoPublicacion);
    console.log(tipoPublicacion);
    if (publicacion) {
      await publicacionModel.eliminarPublicacionPorCodigo(codigo);
      res.send("publicacion eliminada correctamente");
    } else {
      res.send("La publicacion no existe");
    }
  } catch (err) {
    console.error("Error al eliminar la publicacion: ", err);
    res.status(500).json({ success: false, message: "Error al eliminar la publicacion" });
  }
});

router.get("/publicacion", (req, res) => {
  res.render("publicacion");
});

module.exports = router;
