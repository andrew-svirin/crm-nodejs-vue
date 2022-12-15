#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { Config } from '../src/services/config.service';
import { Db } from '../src/services/db.service';
import app from '../src/app';
import http from 'http';
import debug from 'debug';

const debugWww = debug('www');

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
async function onListening () {
  Config.load();
  debugWww('Loaded config');

  await Db.connect();
  debugWww('Connect to DB ' + Db.dbUri());

  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr?.port;
  debugWww('Listening on ' + bind);
}

/**
 * Event listening on server termination.
 */
process.on('SIGINT', async () => {
  await server.close();

  await Db.disconnect();

  process.exit(0);
});
