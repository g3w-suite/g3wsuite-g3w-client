const inherit = require('core/utils/utils').inherit;
const base = require('core/utils/utils').base;
const G3WObject = require('core/g3wobject');

function FormService() {
  this.state = null;
  this.eventBus = new Vue();
  this.setters = {
    setInitForm: function (options) {
      this._setInitForm(options);
    },
    setFormStructure: function (formStructure) {
      this.state.formstructure = formStructure;
    },
    // setter change fields
    setFormFields: function (fields) {
      this.state.fields = fields;
    },
    setupFields: function () {
      this._setupFields();
    },
    // setter sinsert data into form
    setFormData: function (fields) {
      this.setFormFields(fields);
    },
    // setter single field
    setField: function (field) {
    },
    // settere state
    setState: function (state) {
      this._setState(state);
    },
    // setter add action
    addActionsForForm: function (actions) {
    },
    postRender: function (element) {
      // hook for listener to chenge DOM
    }
  };
  base(this);
  this.init = function(options={}) {
    this._setInitForm(options);
  };
  // init form options paased for example by editor
  this._setInitForm = function (options = {}) {
    const layer = options.layer;
    const fields = options.fields;
    this.title = options.title || 'Form';
    this.formId = options.formId;
    this.name = options.name;
    this.pk = options.pk || null;
    this.buttons = options.buttons || [];
    this.context_inputs = options.context_inputs;
    const footer = options.footer || {};
    this.state = {
      loading:false,
      components: [],
      disabledcomponents: [],
      component: null,
      headers: [],
      currentheaderindex: 0,
      fields: null,
      buttons: this.buttons,
      disabled: false,
      valid: true, // global form validation state. True at beginning
      // when input change will be update
      tovalidate: {},
      componentstovalidate: {},
      footer
    };
    this.setFormFields(fields);
    this.setFormStructure(options.formStructure);
    if (layer && options.formStructure) {
      const fieldsoutofformstructure = layer.getFieldsOutOfFormStructure().map((field) => {
        return field.field_name;
      });
      this.state.fieldsoutofformstructure = {
        fields: fields.filter((field) => {
          return fieldsoutofformstructure.indexOf(field.name) > -1;
        })
      }
    }
  };
  this.eventBus.$on('set-loading-form', (bool=false) => {
    this.state.loading = bool;
  })
}

inherit(FormService, G3WObject);

const proto = FormService.prototype;

proto.setLoading = function(bool=false) {
  this.state.loading = bool;
};

proto.setValidComponent = function({id, valid}){
  this.state.componentstovalidate[id] = valid;
 this.isValid();
};

proto.getValidComponent = function(id) {
  return this.state.componentstovalidate[id];
};

// Every input send to form it valid value that will change the genaral state of form
proto.isValid = function(input) {
  if (input) {
    if (input.validate.mutually) {
      if (!input.validate.required) {
        if (!input.validate.empty) {
          input.validate.valid = input.validate.mutually.reduce((previous, inputname) => {
            return previous && this.state.tovalidate[inputname].validate.empty;
          }, true)
        } else {
          let countNoTEmptyInputName = [];
          for (let i = input.validate.mutually.length; i--;) {
            const inputname = input.validate.mutually[i];
            !this.state.tovalidate[inputname].validate.empty && countNoTEmptyInputName.push(inputname) ;
          }
          if (countNoTEmptyInputName.length < 2) {
            input.validate.valid = true;
            input.value = null;
            countNoTEmptyInputName.forEach((inputname) => {
              this.state.tovalidate[inputname].validate.valid = true;
            })
          }
        }
      }
      //check if min_field or max_field is set
    } else if (!input.validate.empty && (input.validate.min_field || input.validate.max_field)) {
        const input_name = input.validate.min_field || input.validate.max_field;
        input.validate.valid = input.validate.min_field ?
          this.state.tovalidate[input.validate.min_field].validate.empty || 1*input.value > 1*this.state.tovalidate[input.validate.min_field].value :
          this.state.tovalidate[input.validate.max_field].validate.empty || 1*input.value < 1*this.state.tovalidate[input.validate.max_field].value;
        if (input.validate.valid) this.state.tovalidate[input_name].validate.valid = true
    }
  }

  this.state.valid = Object.values(this.state.tovalidate).reduce((previous, input) => {
    return previous && input.validate.valid;
  }, true) && Object.values(this.state.componentstovalidate).reduce((previous, valid) => {
    return previous && valid
  }, true);
};


proto.addComponents = function(components = []) {
  for (const component of components) {
    this.addComponent(component);
  }
};

proto.addComponent = function(component) {
  const {id:title, icon, valid} = component;
  if (valid !== undefined) {
    this.state.componentstovalidate[title] = valid;
    this.state.valid = this.state.valid && valid;
    this.eventBus.$emit('add-component-validate', {
      id: title,
      valid
    });
  }
  this.state.headers.push({title, icon});
  this.state.components.push(component.component);
};

proto.replaceComponent = function({index, component}={}) {
  this.state.components.splice(index, 1, component);
};

proto.disableComponent = function({index, disabled}) {
  if (disabled) this.state.disabledcomponents.push(index);
  else this.state.disabledcomponents = this.state.disabledcomponents.filter(disabledIndex => disabledIndex !== index);
};

proto.setComponentByIndex = function(index) {
  if (this.state.disabledcomponents.indexOf(index) === -1) {
    this.setIndexHeader(index);
    this.state.component = this.state.components[index];
  }
};

proto.getComponentByIndex = function(index) {
  return this.state.components[index];
};

proto.setComponent = function(component) {
  this.state.component = component;
};

proto.addedComponentTo = function(formcomponent = 'body') {
  this.state.addedcomponentto[formcomponent] = true;
};

proto.addToValidate = function(input) {
  this.state.tovalidate[input.name] = input;
};

proto.getState = function () {
  return this.state;
};

proto._setState = function(state) {
  this.state = state;
};

proto.getFields = function() {
  return this.state.fields;
};

proto._getField = function(fieldName){
  const field = this.state.fields.find((field) => {
    return field.name === fieldName
  });
  return field;
};

proto.getEventBus = function() {
  return this.eventBus;
};

proto.setIndexHeader = function(index) {
  this.state.currentheaderindex = index;
};

proto.getContext = function() {
  return this.context_inputs.context;
};

proto.getSession = function() {
  return this.getContext().session;
};

proto.getInputs = function() {
  return this.context_inputs.inputs;
};

//method to clear all the open thinghs opened by service
proto.clearAll = function() {
  this.eventBus.$off('addtovalidate');
  this.eventBus.$off('set-main-component');
  this.eventBus.$off('set-loading-form');
  this.eventBus.$off('component-validation');
  this.eventBus.$off('disable-component');
};


module.exports = FormService;
