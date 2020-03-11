const Input = require('gui/components/inputs/input');

const TextAreaInput = Vue.extend({
  mixins: [Input],
  template: require('./textarea.html')
});

module.exports = TextAreaInput;
