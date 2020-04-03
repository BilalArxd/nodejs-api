"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swaggerConfig_1 = __importDefault(require("./swaggerConfig"));
var apiConfig_1 = __importDefault(require("./apiConfig"));
var errorConfig_1 = __importDefault(require("./errorConfig"));
var middlewareConfig_1 = __importDefault(require("./middlewareConfig"));
var configureAll = function (app) {
    middlewareConfig_1.default.configure(app);
    swaggerConfig_1.default.configure(app);
    apiConfig_1.default.configure(app);
    errorConfig_1.default.configure(app);
};
exports.default = {
    configure: configureAll
};
