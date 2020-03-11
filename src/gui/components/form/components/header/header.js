import { createCompiledTemplate } from 'gui/components/vue/utils';
const compiledTemplate = createCompiledTemplate(require('./header.html'));
const HeaderFormComponent = Vue.extend({
  ...compiledTemplate,
  props: {
    headers: {
      type: Array,
      default:[]
    },
    currentindex: {
      type: Number,
      default:0
    }
  },
  methods: {
    click(index) {
      if (this.currentindex !== index){
        this.$emit('clickheader', index);
      }
    }
  }
});

module.exports = HeaderFormComponent;
