
var jwt = require('jsonwebtoken');
var User = require('../models/userModel'); 
var config = require('../config/db');  

exports.login = function (req, res) {
    User.findOne({
        username: req.body.email
    }, function (err, user) {

        if (err) {
            res.json({success: false, statusCode: 500, errorMessage: err});
        }

        if (!user) {
            res.json({success: false, statusCode: 403, errorMessage: 'Usuario No encontraddo'});
        } else if (user) {

            
            if (!user.comparePassword(req.body.password)) {
                res.json({success: false, statusCode: 403, errorMessage: 'Contraseña incorrecta'});
            } else {

        
                var token = jwt.sign(user, config.secret, {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                res.json({
                    success: true,
                    statusCode: 200,
                    message: 'Usted inicio sesion con exito',
                    token: token
                });
            }

        }

    });
};