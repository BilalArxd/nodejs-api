"use strict";
var express = require("express");
var app = express();
var middlewares = require("./middlewares");
middlewares.configure(app);
module.exports = app;
