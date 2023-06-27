var Joi = require('joi');
module.exports.register = {
    options: {flatten: true},
    body: {

        firstName: Joi.string(), 
        lastName: Joi.string(),   
        email: Joi.string().email().required(), 
        password: Joi.string().required()  
    }
};

module.exports.login = {
    options: {flatten: true},
    body: {
        email: Joi.string().email().required(),  
        password: Joi.string().required()  
    }
};

