const utils = require('./utils');
const maphelpers = require('./map/maphelpers');

(function (name, root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  }
  else if (typeof exports === 'object') {
    module.exports = factory();
  }
  else {
    root[name] = factory();
  }
})('g3w-ol', this, function () {
  'use strict';

  const helpers = utils.merge({},maphelpers);

  return {
    helpers: helpers
  }
});
