'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react-amp-template

// --- MODULAR-CSS ---
var style = _noImportant.StyleSheet.create({
  social: { padding: '10px' }
});

// --- REACT + CSUTOM-TAGS ---
// Is very important to import no-important!

var _ref2 = _react2.default.createElement('amp-social-share', {
  type: 'email',
  width: '45',
  height: '33'
});

var SampleApp = function SampleApp(_ref) {
  var value = _ref.value;

  // --- CUSTOM-SCRIPTS ---
  // Notify to include amp-social-share.
  (0, _lib.addScript)('amp-social-share', '2.0');
  (0, _lib.addMeta)([{ type: 'meta', content: { 'content': 'something' } }, { type: 'link', content: { 'rel': 'http://link' } }]);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Hello ',
      value
    ),
    _react2.default.createElement(
      'p',
      { className: (0, _noImportant.css)(style.social) },
      _ref2
    )
  );
};

var startServer = exports.startServer = function startServer(html) {
  _http2.default.createServer(function (request, response) {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  }).listen(8000).on('clientError', function (err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
  console.log('Listening on port 8000');
};

var rampt = new _lib2.default({
  ampValidations: true, // (default) validate the template with AMP Google tool.
  template: {
    head: {
      title: 'react-amp-sample',
      canonical: 'http://sample'
    }
  }
});

/**
* renderStatic returns a promise which will be fulfilled
* with a string that holds the whole HTML document ready to serve.
* The promise will reject for any internal error.
* Once done rendering, the promise's result will be served on port 8000.
*/
rampt.renderStatic(_react2.default.createElement(SampleApp, { value: 'World' })).then(startServer).catch(console.error);
//# sourceMappingURL=demo.js.map