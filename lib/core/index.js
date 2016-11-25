'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _ReactInjection = require('react-dom/lib/ReactInjection');

var _template = require('../template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('core');

var DEFAULTS = {
  doctype: '<!DOCTYPE html>',
  DOMPropertyConfig: {
    Properties: {
      amp: _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'amp-boilerplate': _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'amp-custom': _ReactInjection.DOMProperty.MUST_USE_PROPERTY
    },
    isCustomAttribute: function isCustomAttribute(attributeName) {
      return attributeName.startsWith('amp');
    }
  }
};

var Core = function () {
  function Core(options) {
    _classCallCheck(this, Core);

    this.settings = Object.assign({}, options, DEFAULTS);
    debug('Injecting AMP DOMProperties.');
    _ReactInjection.DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
  }

  _createClass(Core, [{
    key: 'render',
    value: function render(component, props) {
      var _this = this;

      return new Promise(function (fulfill, reject) {
        try {
          var staticMarkup = _this.settings.doctype;
          try {
            staticMarkup += _server2.default.renderToStaticMarkup(_react2.default.createElement(
              _template2.default,
              props,
              component
            ));
            return fulfill(staticMarkup);
          } catch (error) {
            return reject(error);
          }
        } catch (error) {
          return reject(error);
        } finally {
          debug('render finish.');
        }
      });
    }
  }]);

  return Core;
}();

exports.default = Core;
//# sourceMappingURL=index.js.map