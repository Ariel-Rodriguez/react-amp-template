'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('rampt:customscript');

/**
 * Convenience function to render amp scripts into the head of the template.
 * @returns {ReactElement}
 */
var Script = function Script(_ref) {
  var name = _ref.name,
      version = _ref.version;
  return _react2.default.createElement('script', {
    async: true,
    'custom-element': name,
    src: 'https://cdn.ampproject.org/v0/' + name + '-' + version + '.js'
  });
};

/**
 * registeredScripts is a small store that holds the name and version of the
 * customScripts. Should hold unique scripts, is not allowed the same
 * script more than once.
 */
var registeredScripts = new Map();

/**
* registers a new script into the map.
* @param {string} name
* @param {string} version
*/
var addScript = function addScript(name, version) {
  if (!registeredScripts.has(name) || registeredScripts.get(name).version < version) {
    debug('Registering script ', name);
    registeredScripts.set(name, { version: version });
  } else {
    debug('custom-sript [%s] exists already, and it is not newer.', name, version);
  }
};

/**
* Handy interface to register an amp custom-script that will be appended into
* document's head. It wont register more than once a same script.
* @param {String|Array(String|[Array])} - Pass the amp script name, or an array
* that first element tells the name and the second element tells its version.
* optionally you can pass a list that holds the previous parameters.
* Valid params: 'amp-script' | ['amp-script', '0.1'] |
* [ 'amp-script-x', ['amp-script-y','0.1'], 'amp-script-z', ... ]
* If the script exists already, only the newer will precede.
*/
var CustomScripts = function CustomScripts(scripts) {
  var arrScripts = scripts instanceof Array ? scripts : [scripts];
  arrScripts.forEach(function (script) {
    debug('Parse new script ', script);
    var scriptWithOptions = script instanceof Array;
    var name = scriptWithOptions ? script[0] : script;
    var version = scriptWithOptions ? script[1] : _defaults2.default.template.customScriptVersion;
    addScript(name, version);
  });
};

/**
* @returns {Array with ReactElemnt}
**/
CustomScripts.getElements = function () {
  var elements = [];
  var id = 0;
  registeredScripts.forEach(function (value, name) {
    elements.push(_react2.default.createElement(Script, { name: name, version: value.version, key: id }));
    id += 1;
  });
  debug('Retrieveing customScripts. total:', elements.length);
  return elements;
};

CustomScripts.clear = registeredScripts.clear;

exports.default = CustomScripts;
//# sourceMappingURL=customScripts.js.map