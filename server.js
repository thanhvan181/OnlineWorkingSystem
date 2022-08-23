const app = require('./src/app');
const environment = require('./src/config/environment.config');

app.listen(environment.port, () => {
  console.clear();
  console.log('\x1b[36mServer:\x1b[0m \x1b[4mrunning\x1b[0m');
  if (environment.env === 'development') {
    console.log(`> Local: \x1b[4mhttp://localhost:${environment.port}\x1b[0m`);
  }
});
