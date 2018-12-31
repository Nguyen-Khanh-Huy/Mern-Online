var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import { connect } from './config/db';        // Gọi connect mongodb từ config
var indexRouter = require('./routes/index');
import { restRouter } from './resources';     // Gọi API từ resources
import passport from 'passport';              // Gọi module passpost
import { configJWTStrategy } from './middlewares/passport-jwt';
import cors from 'cors';                      // Gọi module cors

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

connect();                                    // Chạy hàm (config)
// app.use : gọi middlewares
app.use(logger('dev')); // req, res show ra console.log()
app.use(express.json()); // chuyển req thành json
app.use(express.urlencoded({ extended: true }));  // giúp chuyền tham số trên thanh địa chỉ url
app.use(cookieParser()); // đọc cookie
app.use(express.static(path.join(__dirname, 'public'))); // cho phép người dùng xem đc thư mục public
app.use(passport.initialize()); // khởi tạo passport
configJWTStrategy();

app.use('/', indexRouter);
app.use('/api', restRouter);                  // Khai báo API

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
