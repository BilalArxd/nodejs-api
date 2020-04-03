import swagger from "express-swagger-generator";
let configureSwagger = function(app: any) {
  const expressSwagger = swagger(app);
  let options = {
    swaggerDefinition: {
      info: {
        description: "This is sample Node-API",
        title: "Node-API Documentation",
        version: "0.1.0"
      },
      host: "localhost:3000",
      basePath: "/",
      produces: ["application/json"],
      schemes: ["http", "https"]
    },
    basedir: __dirname, //app absolute path
    files: ["../controllers/**/*.js"] //Path to the API handle folder
  };
  expressSwagger(options);
};

export default {
  configure: configureSwagger
};
