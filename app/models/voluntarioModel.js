const db = require("../config/db.js");

const crearUsuario= (codVoluntario,	tipoUsuario, nombreU, contraseniaU ) => {
  return new Promise((resolve, reject) => {
    const selectDbQuery = `USE database_app;`;
    const insertQuery = `INSERT INTO usuario(codVoluntario,	tipoUsuario, nombreU, contraseniaU) VALUES (?,?,?,?)`;

    db.query(selectDbQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        db.query(insertQuery, [codVoluntario, tipoUsuario, nombreU, contraseniaU ], (err, result) => {
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
  crearUsuario
};