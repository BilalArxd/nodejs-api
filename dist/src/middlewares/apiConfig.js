"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var homeController_1 = __importDefault(require("../controllers/homeController"));
var usersController_1 = __importDefault(require("../controllers/usersController"));
var configureApi = function (app) {
    app.use("/", homeController_1.default);
    app.use("/users", usersController_1.default);
};
exports.default = {
    configure: configureApi
};
