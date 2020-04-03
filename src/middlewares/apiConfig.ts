import homeController from "../controllers/homeController";
import usersController from "../controllers/usersController";

let configureApi = function (app: any) {
  app.use("/", homeController);
  app.use("/users", usersController);
};
export default {
  configure: configureApi
};
