'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('example:server');
var error = require('debug')('example:server:error');

var startServer = function startServer(html) {
  _http2.default.createServer(function (request, response) {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  }).listen(8000).on('clientError', function (err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    error(err);
  });
  debug('Listening on port 8000');
};

/**
* react-amp-template returns a promise which will be fulfilled
* with a string that holds the whole HTML document ready to serve.
* The promise will reject for any internal error.
* Once done rendering, proceed to create the server.
*/
(0, _lib.renderToStaticMarkup)(_react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' }), _app2.default.config).catch(error).then(startServer);
//# sourceMappingURL=index.js.map