import homeRoute from "../controllers/homeController";
import { userRoute } from "./../controllers/userController";

let configureApi = function (app: any) {
  app.use("/", homeRoute);
  app.use("/users", userRoute);
};

export default {
  configure: configureApi,
};
