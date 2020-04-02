var index = require("../api");
var usersApi = require("../api/users/usersApi");

let configure = function(app) {
  app.use("/", index);
  app.use("/users", usersApi);
};

module.exports = {
  configure: configure
};
