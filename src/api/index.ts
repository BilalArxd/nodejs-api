var express = require("express");
var router = express.Router();
var pjson = require("../../package.json");

router.get("/", function(req: any, res: any, next: any) {
  res.render("index", { title: "Node API", version: pjson.version });
});

module.exports = router;
