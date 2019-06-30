/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () =>
  logger.info('API instance started on http://%s:%d', app.get('host'), port)
);
