const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.use(
  cookieSession({
    secret: 'onlineworkingsystem',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true},
    maxAge: 24 * 60 * 60 * 100,
  })
);
require('./config/passport.config');

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers['x-no-compress']) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

require('./config/database.config').mongodb();

app.use('/v1', require('./api/v1/routes/index.router'));

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusCode || 500,
    message: error.message || 'Internal Server Error',
  });
});

module.exports = app;
