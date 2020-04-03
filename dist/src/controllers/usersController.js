"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var userService_1 = __importDefault(require("../services/userService"));
var usersController = express.Router();
//#region Swagger Specification
/**
 * @typedef User
 * @property {number} id - User's unique ID - eg: 123
 * @property {string} name.required - User's fullname with space - eg: John Doe
 * @property {string} email.required - User's email - eg: abc@xyz.com
 */
//#endregion
/**
 * Get array of all users
 * @route GET /users
 * @group Users - All user operations supported by current API
 * @produces application/json
 * @returns {array} 200 - An array of Users
 * @returns {Error} 404 - Users not found
 */
usersController.get("/", function (req, res, next) {
    var users = userService_1.default.get();
    res.status(200).send(users);
});
/**
 * Get user object filtered by given id
 * @route GET /users/1
 * @group Users - All user operations supported by current API
 * @param {number} id.url.required - User's unique id - eg: 1
 * @produces application/json
 * @returns {array} 200 - An array of Users
 * @returns {Error} 404 - Users not found
 */
usersController.get("/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    var users = userService_1.default.getById(id);
    if (users.length > 0) {
        res.status(200).send(success(users, null));
    }
    else {
        res.status(404).send(fail("User not found."));
    }
});
/**
 * Add user into users array
 * @route POST /users
 * @group Users - All user operations supported by current API
 * @param {User.model} User.body.required - User object
 * @produces application/json
 * @consumes application/json
 * @returns {array} 201 - User created
 * @returns {Error} 400 - Bad Request
 */
usersController.post("/", function (req, res, next) {
    var user = req.body;
    var addedUser = userService_1.default.create(user);
    if (addedUser != null) {
        res.status(201).send(success(addedUser, null));
    }
    else {
        res.status(404).send(fail("User not found."));
    }
});
/**
 * Get user object filtered by given id
 * @route PUT /users/1
 * @group Users - All user operations supported by current API
 * @param {number} id.url.required - User's unique id - eg: 1
 * @param {User.model} User.body.required - User object
 * @produces application/json
 * @returns {object} 202 - User updated
 * @returns {Error} 404 - Users not found
 */
usersController.put("/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    var user = req.body;
    var updatedUsers = userService_1.default.update(id, user);
    if (updatedUsers.length > 0) {
        res.status(202).send(success(updatedUsers, null));
    }
    else {
        res.status(404).send(fail("User not found."));
    }
});
/**
 * Get user object filtered by given id
 * @route DELETE /users/1
 * @group Users - All user operations supported by current API
 * @param {number} id.url.required - User's unique id - eg: 1
 * @produces application/json
 * @returns {object} 202 - An array of Users
 * @returns {Error} 404 - Users not found
 */
usersController.delete("/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    var response = userService_1.default.remove(id);
    if (response) {
        res.status(202).send(success(null, "User deleted successfully."));
    }
    else {
        res.status(404).send(fail("User not found."));
    }
});
function success(data, message) {
    return {
        success: true,
        data: data !== null ? data : "",
        message: message !== null ? message : ""
    };
}
function fail(message) {
    return {
        success: false,
        data: null,
        message: message
    };
}
exports.default = usersController;
