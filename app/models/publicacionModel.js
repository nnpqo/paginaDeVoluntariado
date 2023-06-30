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

const obtenerPublicacionPorTipo = (tipo_publicacion) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const selectQuery = `SELECT * FROM publicaciones WHERE tipo_publicacion = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(selectQuery, [tipo_publicacion], (err, result) => {
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

const actualizarPublicacionPotTipo = (
  nuevoNombrePublicacion,
  nuevaDescripcionPublicacion,
  nCantidadVoluntarios,
  tipo_publicacion
) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const updateQuery = `UPDATE publicaciones SET nombre_publicacion = ?, descripcion = ?, cantidad_voluntarios = ? WHERE tipo_publicacion = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(
          updateQuery,
          [nuevoNombrePublicacion, nuevaDescripcionPublicacion, nCantidadVoluntarios, tipo_publicacion],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      }
    });
  });
};


const eliminarPublicacionPorTipo = (tipo_publicacion) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const deleteQuery = `DELETE FROM publicaciones WHERE tipo_publicacion = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(deleteQuery, [tipo_publicacion], (err, result) => {
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

const getAllPublicaciones = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM database_app.publicaciones`;

    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  crearPublicacion,
  obtenerPublicacionPorTipo,
  actualizarPublicacionPotTipo,
  eliminarPublicacionPorTipo,
  getAllPublicaciones
};


