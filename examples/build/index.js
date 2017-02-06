'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('example:server');
var error = require('debug')('example:server:error');

var _ref = _react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' });

var createTemplate = function createTemplate() {
  /**
  * react-amp-template returns a promise which will be fulfilled
  * with a string that holds the whole HTML document ready to serve.
  * The promise will reject for any internal error.
  * Once done rendering, proceed to create the server.
  */
  var rampt = new _lib2.default({
    ampValidations: true,
    template: {
      head: {
        title: 'react amp template',
        canonical: 'http://non-amp.html'
      }
    }
  });

  return rampt.renderStatic(_ref).catch(error);
};

_http2.default.createServer(function (request, response) {
  createTemplate().then(function (html) {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  });
}).listen(8000).on('clientError', function (err, socket) {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  error(err);
});

debug('Listening on port 8000');
//# sourceMappingURL=index.js.map