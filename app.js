var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('express-favicon');
var fileUpload = require('express-fileupload');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mydb = require('./database/mydb');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var CharacterInfo = require("./routes/CharacterInfo");
var Lineage = require("./routes/Lineage");
var wiki = require("./routes/wiki");
var Background = require("./routes/Background");
var Features = require("./routes/Features");
var Skills = require("./routes/Skills");
var Login = require("./routes/Login");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/d20.png'));
app.use(fileUpload());

// MySQL session store
const sessionStore = new MySQLStore({}, mydb);

// Session information and settings
app.use(session({
  cookie: { 
    maxAge: 60000,
    secure: 'auto' 
  },
  store: sessionStore,
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wiki', wiki);
app.use('/CharacterInfo', CharacterInfo);
app.use('/Lineage', Lineage);
app.use('/Background', Background);
app.use('/Features', Features);
app.use('/Skills', Skills);
app.use('/Login', Login);

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