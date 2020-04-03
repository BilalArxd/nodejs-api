import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

let configure = function(app: any) {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));
};

export default {
  configure: configure
};
