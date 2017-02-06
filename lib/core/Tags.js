'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetas = exports.addMeta = exports.getScripts = exports.addScript = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerHTML = require('../utils/innerHTML');

var _innerHTML2 = _interopRequireDefault(_innerHTML);

var _Script = require('../components/Script');

var _Script2 = _interopRequireDefault(_Script);

var _defaults = require('./defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = require('debug')('rampt:tags');

var COLLECTION_SCRIPT = new Map();
var COLLECTION_META = [];
var SETTINGS = _defaults2.default.template.tags;

var Tags = function Tags(options) {
  _classCallCheck(this, Tags);

  debug('Clearing meta/scripts tags.');
  /**
   * scripts is a small store that holds the name and version of the
   * customScripts. Should hold unique scripts, is not allowed the same
   * script more than once.
  **/
  COLLECTION_SCRIPT.clear();
  COLLECTION_META.length = 0;
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


var addScript = exports.addScript = function addScript(scripts) {
  var arrScripts = scripts instanceof Array ? scripts : [scripts];
  arrScripts.forEach(function (script) {
    var scriptWithOptions = script instanceof Array;
    var name = scriptWithOptions ? script[0] : script;
    var version = scriptWithOptions ? script[1] : SETTINGS['amp-script-version'];

    if (!COLLECTION_SCRIPT.has(name) || COLLECTION_SCRIPT.get(name).version < version) {
      debug('Registering script ', name);
      COLLECTION_SCRIPT.set(name, { version: version });
    } else {
      debug('custom-sript [%s] exists already, and it is not newer.', name, version);
    }
  });
};

/**
* @returns {Array with ReactElemnt}
**/
var getScripts = exports.getScripts = function getScripts() {
  var elements = [];
  var id = 0;
  COLLECTION_SCRIPT.forEach(function (value, name) {
    elements.push(_react2.default.createElement(_Script2.default, { name: name, version: value.version, key: id }));
    id += 1;
  });
  return elements;
};

/**
*/
var addMeta = exports.addMeta = function addMeta(meta) {
  var arrMeta = meta instanceof Array ? meta : [meta];
  arrMeta.forEach(function (meta) {
    debug('Registering meta ', JSON.stringify(meta));
    COLLECTION_META.push({
      type: meta.type,
      content: meta.content
    });
  });
};

var getMetas = exports.getMetas = function getMetas() {
  var metas = COLLECTION_META.map(function (meta, key) {
    if (meta.type === 'application/ld+json') {
      return _react2.default.createElement('script', _extends({ type: 'application/ld+json' }, (0, _innerHTML2.default)(meta.content)));
    }
    return _react2.default.createElement(meta.type, _extends({ key: key }, meta.content));
  });
  return metas;
};

exports.default = Tags;
//# sourceMappingURL=Tags.js.map