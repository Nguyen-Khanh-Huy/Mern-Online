var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import { connect } from './config/db';
var indexRouter = require('./routes/index');
import { restRouter } from './resources';
import passport from 'passport';
import { configJWTStrategy } from './middlewares/passport-jwt';
import cors from 'cors';

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

connect();
// app.use : gọi middlewares
app.use(logger('dev')); // req, res show ra console.log()
app.use(express.json()); // chuyển req thành json
app.use(express.urlencoded({ extended: true }));  // giúp chuyền tham số trên thanh địa chỉ url
app.use(cookieParser()); // đọc cookie
app.use(express.static(path.join(__dirname, 'public'))); // trỏ đường dẫn mặc định vào public 
app.use(passport.initialize()); // khởi tạo passport
configJWTStrategy();

app.use('/', indexRouter);
app.use('/api', restRouter);

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
