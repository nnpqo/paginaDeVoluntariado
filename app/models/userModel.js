const db = require("../../config/db.js");

const crearVoluntario = (codigoVoluntario, nombre, contrasenia) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const insertQuery =
      "INSERT INTO `usuarios`(`codigo_voluntario`, `nombre`, `contrasenia`) VALUES (?, ?, ?)";

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(
          insertQuery,
          [codigoVoluntario, nombre, contrasenia],
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

const obtenerVoluntarioPorCodigo = (codigo_voluntario) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const selectQuery = `SELECT * FROM usuarios WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(selectQuery, [codigo_voluntario], (err, result) => {
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

const getUsuarioLogin = (cod, contrasenia) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const selectQuery = `SELECT * FROM usuarios WHERE codigo_voluntario = ? AND contrasenia = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(
          selectQuery,
          [cod, contrasenia],
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

const actualizarVoluntarioPorCodigo = (
  codigoVoluntario,
  nuevoNombre,
  nuevaContrasenia
) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const updateQuery = `UPDATE usuarios SET nombre = ?, contrasenia = ? WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(
          updateQuery,
          [nuevoNombre, nuevaContrasenia, codigoVoluntario],
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

const eliminarVoluntarioPorCodigo = (codigo_voluntario) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const deleteQuery = `DELETE FROM usuarios WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(deleteQuery, [codigo_voluntario], (err, result) => {
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

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    
  const selectDbQuery = `USE database_app;`;
  const query = `SELECT * FROM usuarios`; // Query para recuperar todos los usuarios

    db.query(selectDbQuery , (error, results) => {
      if (error) {
        reject(error);
      } else {
        db.query(query , (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        })
      }
    });
  });
};

module.exports = {
  crearVoluntario,
  getUsuarioLogin,
  obtenerVoluntarioPorCodigo,
  actualizarVoluntarioPorCodigo,
  eliminarVoluntarioPorCodigo,
  getAllUsers
};
