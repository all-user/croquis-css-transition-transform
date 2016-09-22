'use strict';

module.exports = function () {
  return function (stylus) {
    stylus.define('add', function (a, b) {
      return a.operate('+', b);
    });
  };
};

const Vars = {
  colorBackgroundDark: { value: '#333333' },
  fontFamilyBlandEn: { value: 'Futura, "Gill Sans"' },
  fontSizeMedium: { value: 16, convert: addPx },
  timingFunctionEaseOut: { value: 'cubic-bezier(0,0,.58,1)' }
};

function addPx() {
  return `${ this.value }px`;
}

export default Vars.map();
