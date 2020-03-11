const Input = require('gui/components/inputs/input');
const getUniqueDomId = require('core/utils/utils').getUniqueDomId;
const WidgetMixins = require('gui/components/inputs/widgetmixins');

const CheckBoxInput = Vue.extend({
  mixins: [Input, WidgetMixins],
  template: require('./checkbox.html'),
  data: function() {
    return {
      value: null,
      label:null,
      id: getUniqueDomId() // new id
    }
  },
  methods: {
    setLabel(){
      // convert label
      this.label = this.service.convertCheckedToValue(this.value);
    },
    setValue() {
      this.value = this.service.convertValueToChecked();
    },
    changeCheckBox: function() {
      // convert label
      this.setLabel();
      this.widgetChanged();
    },
    stateValueChanged() {
      this.setValue();
      this.setLabel();
    }
  },
  mounted: function() {
    this.value = this.service.convertValueToChecked();
    this.setLabel();
    this.change();
  }
});

module.exports = CheckBoxInput;
