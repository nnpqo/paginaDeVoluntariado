const db = require("../../config/db.js");

const crearPublicacion = (nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const insertQuery = `INSERT INTO publicacion(nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios) VALUES (?,?,?,?)`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(insertQuery, [nombrePublicacion, descripcion, tipoPublicacion, cantidadVoluntarios], (err, result) => {
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
  crearPublicacion
};

