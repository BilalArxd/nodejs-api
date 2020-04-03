"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_swagger_generator_1 = __importDefault(require("express-swagger-generator"));
var configureSwagger = function (app) {
    var expressSwagger = express_swagger_generator_1.default(app);
    var options = {
        swaggerDefinition: {
            info: {
                description: "This is sample Node-API",
                title: "Node-API Documentation",
                version: "0.1.0"
            },
            host: "localhost:3000",
            basePath: "/",
            produces: ["application/json"],
            schemes: ["http", "https"]
        },
        basedir: __dirname,
        files: ["../controllers/**/*.js"] //Path to the API handle folder
    };
    expressSwagger(options);
};
exports.default = {
    configure: configureSwagger
};
