// oggetto base utilizzato per i mixins
const Input = require('gui/components/inputs/input');

const IntegerInput = Vue.extend({
  mixins: [Input],
  template: require('./integer.html')
});

module.exports = IntegerInput;
