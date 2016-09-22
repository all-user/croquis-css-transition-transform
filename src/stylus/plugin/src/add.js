module.exports = () => stylus => {
  stylus.define('add', (a, b) => a.operate('+', b));
};
