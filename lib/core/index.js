'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

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
      'amp-custom': _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'custom-element': _ReactInjection.DOMProperty.MUST_USE_PROPERTY
    },
    isCustomAttribute: function isCustomAttribute(attributeName) {
      return attributeName.startsWith('amp');
    }
  }
};

var Core = function () {
  function Core(options) {
    _classCallCheck(this, Core);

    this.settings = _extends({}, DEFAULTS, {
      options: options
    });
    debug('Injecting AMP DOMProperties.');
    _ReactInjection.DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
    this.render = this.render.bind(this);
    this.renderToFile = this.renderToFile.bind(this);
  }

  _createClass(Core, [{
    key: 'aphrodite',
    value: function aphrodite(component) {
      return _noImportant.StyleSheetServer.renderStatic(function () {
        return _server2.default.renderToStaticMarkup(component);
      });
    }
  }, {
    key: 'render',
    value: function render(component, _ref) {
      var _this = this;

      var head = _ref.head,
          html = _ref.html;

      return new Promise(function (fulfill, reject) {
        try {
          try {
            var _aphrodite = _this.aphrodite(component),
                css = _aphrodite.css;

            var document = _server2.default.renderToStaticMarkup(_react2.default.createElement(
              _template2.default,
              {
                head: _extends({}, head, { customStyles: css.content }),
                html: html
              },
              component
            ));
            return fulfill(_this.settings.doctype + document);
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
  }, {
    key: 'renderToFile',
    value: function renderToFile(file) {
      for (var _len = arguments.length, toRender = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        toRender[_key - 1] = arguments[_key];
      }

      return this.render.apply(this, toRender).then(function (staticMarkup) {
        try {
          _fs2.default.writeFileSync(file, staticMarkup);
          return staticMarkup;
        } catch (err) {
          throw new Error(err);
        }
      });
    }
  }]);

  return Core;
}();

exports.default = Core;
//# sourceMappingURL=index.js.map