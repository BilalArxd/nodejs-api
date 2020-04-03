"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var package_json_1 = require("../../package.json");
var homeController = express.Router();
homeController.get("/", function (req, res, next) {
    res.render("index", { title: "Node API", version: package_json_1.version });
});
exports.default = homeController;
