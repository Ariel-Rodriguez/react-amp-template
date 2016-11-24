// content of index.js
import http from 'http';
const debug = require('debug')('server');

const requestHandler = (request, response) => {
  debug(request.url);
  response.end('Hello Node.js Server!');
};

export default class {
  constructor(config) {
    this.cfg = config;
    this.server = http.createServer(requestHandler);
  }

  start() {
    this.server.listen(this.cfg.port, (err) => {
      if (err) {
        return debug('something bad happened', err);
      }

      debug(`server is listening on ${this.cfg.port}`);
      return true;
    });
  }
}
