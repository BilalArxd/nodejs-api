var index = require("../api");
var usersApi = require("../api/users/usersApi");

let configureApi = function(app: any) {
  app.use("/", index);
  app.use("/users", usersApi);
};

module.exports = {
  configure: configureApi
};
