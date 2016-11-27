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

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _ReactInjection = require('react-dom/lib/ReactInjection');

var _noImportant = require('aphrodite/no-important');

var _customScripts = require('./customScripts');

var _customScripts2 = _interopRequireDefault(_customScripts);

var _ampvalidator = require('../utils/ampvalidator');

var _ampvalidator2 = _interopRequireDefault(_ampvalidator);

var _template = require('../template');

var _template2 = _interopRequireDefault(_template);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('rampt:core');

/**
 * A class that manages ReactDOMServer & ModularCSS to
 * transpile ReactElements into a single valid AMP HTML document.
 * @param {Object} options - its defaults is a set of DOMProperty needed to
 * prevent React in ignore AMP's attrs and custom-elements.
 * @export
 * @constructor
 */

var Core = function () {
  function Core(options) {
    _classCallCheck(this, Core);

    this.settings = Object.assign({}, _defaults2.default, options);
    debug('Injecting AMP DOMProperties.');
    _ReactInjection.DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
    this.render = this.render.bind(this);
    this.renderToFile = this.renderToFile.bind(this);
    this.getValidator = this.getValidator.bind(this);
  }

  /**
   * Aphrodite's css server-side rendering
   * 'https://github.com/Khan/aphrodite'
   * @param {ReactElement} component
   * @returns {Object} - { css, html }
   */


  _createClass(Core, [{
    key: 'aphrodite',
    value: function aphrodite(component) {
      debug('Running aphrodite.');
      return _noImportant.StyleSheetServer.renderStatic(function () {
        return _server2.default.renderToStaticMarkup(component);
      });
    }

    /**
     * Creates a Promise and fulfills it with the given component rendered into a
     * a valid AMP HTML document reduced to a single string.
     * The component is allowed to contain childrens with custom AMP elements.
     * @param {ReactElement} component - The component root to render into body.
     * @param {Object} config - required and contains few optional
     * parameters for AMP template.
     * @returns {Promise[string]} - String that contains the static markup
     */

  }, {
    key: 'render',
    value: function render(component, config) {
      var _this = this;

      var template = _extends({}, _defaults2.default.template, config);
      debug('Template settings:', template);
      return new Promise(function (fulfill, reject) {
        try {
          var _aphrodite = _this.aphrodite(component),
              html = _aphrodite.html,
              css = _aphrodite.css;

          debug('Executing reactDOMServer.');
          var document = _this.settings.doctype + _server2.default.renderToStaticMarkup(_react2.default.createElement(_template2.default, {
            html: template.html,
            head: _extends({}, template.head, {
              customStyles: css.content,
              customScripts: _customScripts2.default.getElements()
            }),
            body: html
          }));
          if (template.ampValidationEnabled) {
            debug('AMP validation is enabled.');
            return _this.validateMarkup(document).then(fulfill).catch(reject);
          }
          return fulfill(document);
        } catch (error) {
          return reject(error);
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
        debug('Rendering to file --> ', file);
        try {
          _fs2.default.writeFileSync(file, staticMarkup);
          return staticMarkup;
        } catch (err) {
          throw new Error(err);
        }
      });
    }
  }, {
    key: 'getValidator',
    value: function getValidator() {
      var _this2 = this;

      debug('Waiting for validator.');
      return _ampvalidator2.default.getInstance().then(function (instance) {
        return _this2.validator = instance;
      }).then(function () {
        return debug('Validator has arrived :).');
      });
    }
  }, {
    key: 'validateMarkup',
    value: function validateMarkup(markup) {
      var _this3 = this;

      debug('validating markup.');
      return this.getValidator().then(function () {
        _this3.validator.validateMarkup(markup);
        return markup;
      });
    }
  }]);

  return Core;
}();

exports.default = Core;
//# sourceMappingURL=index.js.map