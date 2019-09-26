'use strict';

const express = require('express'),
  logger = require('morgan'),
  swaggerJSDoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express'),
  app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', require('./routes/user'));
app.use('/board', require('./routes/board'));
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(require('./lib/swagger'))));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new Error();
  error.status = 404;
  error.message = 'Not Fount';
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(`[ERROR] `, err);

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
