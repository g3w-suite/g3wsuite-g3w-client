import { createCompiledTemplate } from 'gui/components/vue/utils';
const inherit = require('core/utils/utils').inherit;
const base = require('core/utils/utils').base;
const Component = require('gui/components/vue/component');
const MetadataService = require('gui/components/metadata/metadataservice');
const templateCompiled = createCompiledTemplate(require('./metadata.html'));

const InternalComponent = Vue.extend({
  ...templateCompiled,
  data: function() {
    return {
      state: null
    }
  },
  mounted: function() {
    this.$nextTick(() => {});
  }
});

const MetadataComponent = function(options = {}) {
  base(this, options);
  this.title = "sdk.metadata.title";
  const service = options.service || new MetadataService(options);
  this.setService(service);
  this._service.on('reload', () => {
    this.setOpen(false);
  });
  this.setInternalComponent = function () {
    this.internalComponent = new InternalComponent({
      service: service
    });
    this.internalComponent.state = service.state;
    return this.internalComponent;
  };
  this._setOpen = function(bool) {
    this._service.showMetadata(bool);
  };
};

inherit(MetadataComponent, Component);

module.exports = MetadataComponent;


