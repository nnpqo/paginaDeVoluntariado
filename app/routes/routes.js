
 var express = require('express');  //load express module to crate instance of app
 var jwt = require('jsonwebtoken'); //load json eb token to verify token in endpoints
 var config = require('./config/index'); //get secret key from configuration parameters
 
 var router = express.Router();
 var validate = require('express-validation');
 var homeController = require('../controllers/homeController');
 var userController = require('../controllers/userController');
 var loginController = require('../controllers/loginController');
 var validation = require('../routes/validation');
 
 router.use(function (req, res, next) {
     console.log(req.originalUrl);
     if (req.originalUrl === '/login') {
         return next();
     } else {
         var token = req.body.token || req.query.token || req.headers['x-access-token'];
          if (token) {
              jwt.verify(token, config.secret, function (err, decoded) {
                 if (err) {
                     return res.json({
                         success: false,
                         statusCode: 401,
                         errMessage: 'Error en iniciar sesion'
                     });
                 } else {
                     req.decoded = decoded;
                     next();
                 }
             });
 
         } else {

             return res.json({success: false, statusCode: 403, errMessage: 'Error en autentificarse'});
 
         }
     }
 
 
 }); 
 router.route('/')
     .get(homeController.getWelcomeMessage);
 
 router.route('/users')
     .get(userController.user.getAllUsers)
     .post(validate(validation.register), userController.user.register);
 
 router.route('/login')
     .post(validate(validation.login), loginController.login);
 module.exports = router;