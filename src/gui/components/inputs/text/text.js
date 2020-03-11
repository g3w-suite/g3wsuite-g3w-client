const Input = require('gui/components/inputs/input');

const TextInput = Vue.extend({
  template: require('./text.html'),
  mixins: [Input]
});

module.exports = TextInput;
