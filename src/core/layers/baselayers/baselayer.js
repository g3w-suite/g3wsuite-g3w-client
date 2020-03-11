const inherit = require('core/utils/utils').inherit;
const base = require('core/utils/utils').base;
const WMSLayer = require('../map/wmslayer');
const ImageLayer = require('core/layers/imagelayer');

function BaseLayer(config = {}, options={}) {
  base(this, config, options);
  if (this.isWMS()) {
    const config = {
      url: this.getWmsUrl(),
      id: this.state.id,
      tiled: this.state.tiled
    };
    this._mapLayer = new WMSLayer(config);
    this._mapLayer.addLayer(this);
  } else {
    this._mapLayer = this;
  }
}

inherit(BaseLayer, ImageLayer);

const proto = BaseLayer.prototype;

proto._makeOlLayer = function() {
  //TO OVERWRITE
};

proto._registerLoadingEvent = function() {
  this._olLayer.getSource().on('imageloadstart', () => {
    this.emit("loadstart");
  });
  this._olLayer.getSource().on('imageloadend', () => {
    this.emit("loadend");
  });
};

proto.getSource = function(){
  return this.getOLLayer().getSource();
};

proto.toggleLayer = function(){
  this._updateLayers();
};

proto.update = function(mapState, extraParams) {
  this._updateLayer(mapState, extraParams);
};

proto.getOLLayer = function() {
  let olLayer = this._olLayer;
  if (!olLayer) {
    olLayer = this._olLayer = this._makeOlLayer();
    this._registerLoadingEvent();
    if (this._mapLayer.config.attributions) {
      this._olLayer.getSource().setAttributions(this._mapLayer.config.attributions)
    }
    olLayer.setVisible(this._mapLayer.state.visible)
  }
  return olLayer;
};

proto._updateLayer = function(mapState, extraParams) {
  if (this.isWMS()) {
    this._mapLayer.update(mapState, extraParams)
  }
};

proto.setVisible = function(bool) {
  this.getOLLayer().setVisible(bool)
};

proto.getMapLayer = function() {
  return this._mapLayer;
};


module.exports = BaseLayer;
