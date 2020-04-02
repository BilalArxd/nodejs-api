var swaggerConfig = require("./swaggerConfig");
var apiConfig = require("./apiConfig");
var errorConfig = require("./errorConfig");
var middlewareConfig = require("./middlewareConfig");

let configureAll = function(
  app: any,
  path: any,
  logger: any,
  cookieParser: any
) {
  middlewareConfig.configure(app);
  swaggerConfig.configure(app);
  apiConfig.configure(app);
  errorConfig.configure(app);
};

module.exports = {
  configure: configureAll
};
