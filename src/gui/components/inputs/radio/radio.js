const Input = require('gui/components/inputs/input');
const getUniqueDomId = require('core/utils/utils').getUniqueDomId;

const RadioInput = Vue.extend({
  mixins: [Input],
  data: function() {
    return {
      ids: [getUniqueDomId(),getUniqueDomId()],
      name: `name_${getUniqueDomId()}`,
      radio_value: this.state.value
    }
  },
  watch: {
    'radio_value'() {
      this.state.value = this.radio_value;
      this.change()
    }
  },
  template: require('./radio.html')
});

module.exports = RadioInput;
