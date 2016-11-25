'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // content of index.js


var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('server');

var requestHandler = function requestHandler(request, response) {
  debug(request.url);
  response.end('Hello Node.js Server!');
};

var _class = function () {
  function _class(config) {
    _classCallCheck(this, _class);

    this.cfg = config;
    this.server = _http2.default.createServer(requestHandler);
  }

  _createClass(_class, [{
    key: 'start',
    value: function start() {
      var _this = this;

      this.server.listen(this.cfg.port, function (err) {
        if (err) {
          return debug('something bad happened', err);
        }

        debug('server is listening on ' + _this.cfg.port);
        return true;
      });
    }
  }]);

  return _class;
}();

exports.default = _class;
//# sourceMappingURL=index.js.map