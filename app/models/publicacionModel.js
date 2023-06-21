const db = require("../../config/db.js");

const crearPublicacion = (nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO publicacion(nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) VALUES (?,?,?,?)`;
    db.query(query, [nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve("Publicación registrada con éxito");
      }
    });
  });
};

module.exports = {
  crearPublicacion
};
