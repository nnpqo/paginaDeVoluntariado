const db = require("../../config/db.js");

const crearPublicacion = (nombre, descripcion, tipoPublicacion, cantidadVoluntarios) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const insertQuery = "INSERT INTO `publicaciones`(`nombre_publicacion`, `descripcion`, `tipo_publicacion`, `cantidad_voluntarios`) VALUES (?,?,?,?)"
  
    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(insertQuery, [nombre, descripcion, tipoPublicacion, cantidadVoluntarios], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

const obtenerPublicacionesPorTipo = (tipoPublicacion) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const selectQuery = `SELECT * FROM publicaciones WHERE tipo_publicacion = ?;`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(selectQuery, [tipoPublicacion], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

module.exports = {
  crearPublicacion,
  obtenerPublicacionesPorTipo
};


