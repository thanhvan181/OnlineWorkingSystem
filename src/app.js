const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
