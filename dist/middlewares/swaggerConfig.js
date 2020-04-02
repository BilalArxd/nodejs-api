"use strict";
var configureSwagger = function (app) {
    var expressSwagger = require("express-swagger-generator")(app);
    var options = {
        swaggerDefinition: {
            info: {
                description: "This is sample Node-API",
                title: "Node Api Documentation",
                version: "0.1.0"
            },
            host: "localhost:3000",
            basePath: "/",
            produces: ["application/json"],
            schemes: ["http", "https"]
        },
        basedir: __dirname,
        files: ["../api/**/*.js"] //Path to the API handle folder
    };
    expressSwagger(options);
};
module.exports = {
    configure: configureSwagger
};
