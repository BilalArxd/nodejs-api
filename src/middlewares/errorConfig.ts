import createError from "http-errors";

let configureErrors = function (app: any) {
  app.use(function (req: any, res: any, next: any) {
    next(createError(404));
  });

  // error handler
  app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
};

export default {
  configure: configureErrors
};
