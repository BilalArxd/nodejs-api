"use strict";
var index = require("../api");
var usersApi = require("../api/users/usersApi");
var configureApi = function (app) {
    app.use("/", index);
    app.use("/users", usersApi);
};
module.exports = {
    configure: configureApi
};
