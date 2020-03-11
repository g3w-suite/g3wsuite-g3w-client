const Input = require('gui/components/inputs/input');

const RangeInput = Vue.extend({
  mixins: [Input],
  template: require('./range.html'),
  data() {
    const options = this.state.input.options.values[0];
    const min = 1*options.min;
    const max = 1*options.max;
    const step = 1*options.Step;
    return {
      max,
      min,
      step: step
    }
  },
  methods: {
    checkValue() {
      this.change();
    }
  }
});

module.exports = RangeInput;
