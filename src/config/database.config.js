const mongoose = require('mongoose');
const environment = require('./environment.config');

module.exports = {
  mongodb: () => {
    mongoose
      .connect(environment.mongo_uri)
      .then((x) => {
        console.log('\x1b[36mDatabase:\x1b[0m \x1b[4mconnected\x1b[0m');
        console.log('> Database host:', x.connection.host);
        console.log('> Database name:', x.connection.name);
      })
      .catch((error) => {
        console.log('\x1b[36mDatabase:\x1b[0m \x1b[4mconnection failed\x1b[0m');
        console.log(`>`, error);
      });
    // mongoose.set('debug', true);
    // mongoose.set('debug', { color: false });
    // mongoose.set('debug', { shell: true });
    return mongoose;
  },
};
