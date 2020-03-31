module.exports = function(req, res, next) {
  StartLogger();

  Log({ name: "Path", value: `${req.method} ${req.path}` });
  Log({ name: "RequestParams", value: req.params });
  Log({ name: "RequestBody", value: req.body });
  next();
  Log({ name: "ResponseBody", value: { value: "Abc" } });

  StopLogger();
};

function Log(info) {
  console.log(`** ${info.name}: ${JSON.stringify(info.value)}`);
}

function StartLogger() {
  console.log(`***********************************`);
}
function StopLogger() {
  console.log(`***********************************`);
}
