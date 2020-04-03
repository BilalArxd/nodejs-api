import swaggerConfig from "./swaggerConfig";
import apiConfig from "./apiConfig";
import errorConfig from "./errorConfig";
import middlewareConfig from "./middlewareConfig";

let configureAll = function(app: any) {
  middlewareConfig.configure(app);
  swaggerConfig.configure(app);
  apiConfig.configure(app);
  errorConfig.configure(app);
};
export default {
  configure: configureAll
};
