var swaggerConfig = require("./swaggerConfig");
var apiConfig = require("./apiConfig");
var errorConfig = require("./errorConfig");
var middlewareConfig = require("./middlewareConfig");

let configure = function(app, path, logger, cookieParser) {
  middlewareConfig.configure(app);
  swaggerConfig.configure(app);
  apiConfig.configure(app);
  errorConfig.configure(app);
};

module.exports = {
  configure: configure
};
