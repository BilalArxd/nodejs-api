"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userData_1 = __importDefault(require("../data/userData"));
var get = function () {
    var response = userData_1.default.get();
    return response;
};
var getById = function (id) {
    var response = userData_1.default.getById(id);
    return response;
};
var create = function (user) {
    var response = userData_1.default.create(user);
    return response;
};
var update = function (id, user) {
    var response = userData_1.default.update(id, user);
    return response;
};
var remove = function (id) {
    var response = userData_1.default.remove(id);
    return response;
};
exports.default = {
    create: create,
    get: get,
    getById: getById,
    update: update,
    remove: remove
};
