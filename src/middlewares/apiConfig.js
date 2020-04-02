var indexController = require("../api/index.controller");
var usersController = require("../api/users.controller");

let configure = function(app) {
  app.use("/", indexController);
  app.use("/users", usersController);
};

module.exports = {
  configure: configure
};
