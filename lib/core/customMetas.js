'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('rampt:custommeta');

// registeredScripts is a small store that holds ReactElements
var registeredMetas = [];

var createMeta = function createMeta(meta) {
  registeredMetas.push(_react2.default.createElement(meta, { key: registeredMetas.length }));
};

/**
* Handy interface react components into head.
* @param {String|Array(String|[Array])} - Pass a React Component, or an array
* of React Components.
*/
var CustomMeta = function CustomMeta(component) {
  if (component instanceof Array) {
    debug('Registering bunch of metas.');
    component.forEach(function (el) {
      createMeta(el);
    });
  } else {
    debug('Registering meta');
    createMeta(component);
  }
};

CustomMeta.getElements = function () {
  return registeredMetas;
};

CustomMeta.clear = function () {
  return registeredMetas.splice(registeredMetas.length);
};

exports.default = CustomMeta;
//# sourceMappingURL=customMetas.js.map