exports.getWelcomeMessage = function(req, res) {
    console.log(req.url);

    res.json({statusCode: 200, success: true, message:"WELCOME GEOS"});

};