import { createCompiledTemplate } from 'gui/components/vue/utils';
const compiledTemplate = createCompiledTemplate(require('./footer.html'));
const FooterFormComponent = Vue.extend({
  ...compiledTemplate,
  props: ['state'],
  data() {
    return {
      id:"footer",
      active: true
    }
  },
  methods: {
    exec: function(cbk) {
      cbk instanceof Function ? cbk(this.state.fields): (function() { return this.state.fields})();
    },
    btnEnabled: function(button) {
      return button.type !== 'save' || (button.type === 'save' && this.isValid());
    },
    isValid: function() {
      return this.state.valid
    },
    _enterEventHandler(evt) {
      if (evt.which === 13) {
        evt.preventDefault();
        if (this.isValid() && this.active)
          $(this.$el).find('button').click();
      }
    }
  },
  activated(){
    this.active = true;
  },
  deactivated() {
    this.active = false;
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener('keydown', this._enterEventHandler)
    })
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this._enterEventHandler)
  }
});

module.exports = FooterFormComponent;
