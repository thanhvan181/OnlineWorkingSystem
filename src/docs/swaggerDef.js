const { version } = require('../../package.json');
const environment = require('../config/environment.config');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'nodejs-boilerplate API documentation',
    version,
  },
  servers: [
    {
      url: `http://localhost:${environment.port}/v1`,
    },
  ],
};
