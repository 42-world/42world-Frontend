const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/user.js");
const boardsRouter = require("./routes/board.js");
const uploadRouter = require("./routes/upload.js");
const articleRouter = require("./routes/article.js");
const companyRouter = require("./routes/company.js");
const searchRouter = require("./routes/search.js");
const secretKey = "THISISSECRET";

//const __dirname = path.resolve();
let app = express();

// Token Secret Key
app.set("jwt-secret", secretKey);

app.use(cors({ origin: "http://localhost:3000" }));
// view engine setup
// view control
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// route control
app.use(usersRouter);
app.use(articleRouter);
app.use(boardsRouter);
app.use(companyRouter);
app.use(uploadRouter);
app.use(searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
