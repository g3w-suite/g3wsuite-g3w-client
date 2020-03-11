import {GOOGLE_API_KEY} from 'g3w-ol/config/config';
const inherit = require('core/utils/utils').inherit;
const base = require('core/utils/utils').base;
const G3WObject = require('core/g3wobject');
const GUI = require('gui/gui');
const StreetViewComponent = require('gui/components/streetview/streetview');

function StreetViewService() {
  this._position = null;
  this.setters = {
    postRender: function(position) {}
  };

  this.init = function() {
    return new Promise((resolve) => {
      $script(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`, () => {
        resolve()
      })
    })
  };

  this.getPosition = function() {
    return this._position;
  };

  this.showStreetView = function(position) {
    this._position = position;
    GUI.setContent({
      content: new StreetViewComponent({
        service: this
      }),
      title: 'StreetView'
    });
  };
  base(this);
}

inherit(StreetViewService, G3WObject);

module.exports = StreetViewService;
