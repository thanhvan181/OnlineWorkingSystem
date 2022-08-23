const dotenv = require('dotenv');
const minimist = require('minimist');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.local' });
} else {
  dotenv.config();
}
const argv = minimist(process.argv.slice(2));

module.exports = {
  port: parseInt(argv.port || process.env.PORT || '5000', 10),
  mongo_uri: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
};
