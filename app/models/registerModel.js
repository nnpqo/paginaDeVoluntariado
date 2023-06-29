const db = require("../../config/db.js");

const crearVoluntario = (codigoVoluntario, nombre, contrasenia) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const insertQuery = "INSERT INTO `usuarios`(`codigo_voluntario`, `nombre`, `contrasenia`) VALUES (?, ?, ?)";

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(insertQuery, [codigoVoluntario, nombre, contrasenia], (err, result) => {
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

const obtenerVoluntarioPorCodigo = (codigoVoluntario) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const selectQuery = `SELECT * FROM usuarios WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(selectQuery, [codigoVoluntario], (err, result) => {
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

const actualizarVoluntarioPorCodigo = (codigoVoluntario, nuevoNombre, nuevaContrasenia) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const updateQuery = `UPDATE usuarios SET nombre = ?, contrasenia = ? WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(updateQuery, [nuevoNombre, nuevaContrasenia, codigoVoluntario], (err, result) => {
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

const eliminarVoluntarioPorCodigo = (codigoVoluntario) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const deleteQuery = `DELETE FROM usuarios WHERE codigo_voluntario = ?`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(deleteQuery, [codigoVoluntario], (err, result) => {
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
  crearVoluntario,
  obtenerVoluntarioPorCodigo,
  actualizarVoluntarioPorCodigo,
  eliminarVoluntarioPorCodigo
};