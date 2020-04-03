import * as express from "express";
import { version } from "../../package.json";

var homeController = express.Router();

homeController.get("/", function(req: any, res: any, next: any) {
  res.render("index", { title: "Node API", version: version });
});

export default homeController;
