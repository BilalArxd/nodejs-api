var express = require("express");
var router = express.Router();

var usersService = require("./usersService");

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
router.get("/", function(req, res, next) {
  var users = usersService.get();
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
router.get("/:id", function(req, res, next) {
  const id = parseInt(req.params.id);
  var users = usersService.getById(id);
  if (users.length > 0) {
    res.status(200).send(success(users));
  } else {
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
router.post("/", function(req, res, next) {
  const user = req.body;
  var addedUser = usersService.create(user);
  if (addedUser != null) {
    res.status(201).send(success(addedUser));
  } else {
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
router.put("/:id", function(req, res, next) {
  const id = parseInt(req.params.id);
  const user = req.body;
  const updatedUsers = usersService.update(id, user);
  if (updatedUsers.length > 0) {
    res.status(202).send(success(updatedUsers));
  } else {
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
router.delete("/:id", function(req, res, next) {
  const id = parseInt(req.params.id);
  var response = usersService.remove(id);
  if (response) {
    res.status(202).send(success(null, "User deleted successfully."));
  } else {
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

module.exports = router;
