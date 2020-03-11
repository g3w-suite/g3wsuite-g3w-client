const Input = require('gui/components/inputs/input');

const FloatInput = Vue.extend({
  mixins: [Input],
  template: require('./float.html')
});

module.exports = FloatInput;
