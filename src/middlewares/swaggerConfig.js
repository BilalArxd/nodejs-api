let configure = function(app) {
  const expressSwagger = require("express-swagger-generator")(app);
  let options = {
    swaggerDefinition: {
      info: {
        description: "This is a sample server",
        title: "Swagger",
        version: "1.0.0"
      },
      host: "localhost:3000",
      basePath: "/",
      produces: ["application/json"],
      schemes: ["http", "https"]
    },
    basedir: __dirname, //app absolute path
    files: ["../api/**/*.js"] //Path to the API handle folder
  };
  expressSwagger(options);
};

module.exports = {
  configure: configure
};
