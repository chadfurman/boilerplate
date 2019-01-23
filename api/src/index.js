const winston = require('winston');
const app = require('./app');
const port = +process.env.PORT;
const Raven = require('raven');

if (process.env.SENTRY_URL) {
  const raven = new Raven.Client(process.env.SENTRY_URL, {
    environment: process.env.NODE_ENV || 'no-env',
    captureUnhandledRejections: true,
    autoBreadcrumbs: true,
  });
  process.on('warning', warning => raven.captureException(warning));
  app.use(Raven.requestHandler())
}

const server = app.listen(port, () => {
  winston.info('NODE_ENV: ' + process.env.NODE_ENV);
  winston.info(`Api listening on port ${server.address().port}!`);
});

module.exports = server;
