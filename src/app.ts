import express from "express";
import middlewares from "./middlewares";

var app = express();
middlewares.configure(app);
export default app;
