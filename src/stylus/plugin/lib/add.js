'use strict';

module.exports = function () {
  return function (stylus) {
    stylus.define('add', function (a, b) {
      return a.operate('+', b);
    });
  };
};