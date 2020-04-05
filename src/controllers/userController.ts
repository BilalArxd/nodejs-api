import * as express from "express";
import {
  IBaseController,
  BaseController,
} from "./../models/Generics/BaseController";
import { IUser, UserList } from "./../models/User";
import { UserService } from "../services/userService";
import { UserRepository } from "../data/userRepository";

let userController: IBaseController<IUser> = new BaseController<IUser>(
  new UserService(new UserRepository(new UserList()))
);

var controller = express.Router();

/**
 * @typedef User
 * @property {number} id - User's unique ID - eg: 123
 * @property {string} name.required - User's fullname with space - eg: John Doe
 * @property {string} email.required - User's email - eg: abc@xyz.com
 */

/**
 * Get array of all users
 * @route GET /users
 * @group Users - All user operations supported by current API
 * @produces application/json
 * @returns {array} 200 - An array of Users
 * @returns {Error} 404 - Users not found
 */

controller.get("/", function (req: any, res: any, next: any) {
  userController.get(req, res, next);
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

controller.get("/:id", function (req: any, res: any, next: any) {
  userController.getSingle(req, res, next);
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
controller.post("/", function (req: any, res: any, next: any) {
  userController.add(req, res, next);
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
controller.put("/:id", function (req: any, res: any, next: any) {
  userController.update(req, res, next);
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

controller.delete("/:id", function (req: any, res: any, next: any) {
  userController.delete(req, res, next);
});

export default controller;
