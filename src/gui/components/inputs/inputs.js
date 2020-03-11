const InputsComponents = {
  'text_input': require('./text/text'),
  'textarea_input': require('./textarea/textarea'),
  'integer_input': require('./integer/integer'),
  'string_input':require('./text/text'), //temporary
  'float_input': require('./float/float'),
  'radio_input': require('./radio/radio'),
  'check_input': require('./checkbox/checkbox'),
  'range_input': require('./range/range'),
  'datetimepicker_input': require('./datetimepicker/datetimepicker'),
  'unique_input': require('./unique/unique'),
  'select_input': require('./select/select'),
  'media_input': require('./media/media'),
  'select_autocomplete_input': require('./select/select'),
  'picklayer_input': require('./picklayer/picklayer')
};

module.exports = InputsComponents;
