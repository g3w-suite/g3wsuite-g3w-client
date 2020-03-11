const inherit = require('core/utils/utils').inherit;
const createOlLayer = require('core/utils/geo').createOlLayer;
const createLayerStyle = require('core/utils/geo').createLayerStyle;
const GUI = require('gui/gui');

const G3WObject = require('core/g3wobject');

function VectorLayer(options = {}) {
  this.mapService = GUI.getComponent('map').getService();
  this.geometrytype = options.geometrytype || null;
  this.type = options.type || null;
  this.crs = options.crs  || null;
  this.id = options.id;
  this.name = options.name || "";
  this.style = options.style;
  this.color = options.color;
  this.geometryType = options.geometryType;
  this.mapProjection = this.mapService.getProjection().getCode();
  this.projection = options.projection || this.mapProjection;
  this.url = options.url;
  this.data = options.data;
  this.provider = options.provider;
  this._olLayer = null;
}

inherit(VectorLayer,G3WObject);

module.exports = VectorLayer;

const proto = VectorLayer.prototype;

proto.setProvider = function(provider) {
  this._provider = provider;
};

proto.getProvider = function() {
  return this._provider;
};

proto._makeOlLayer = function({style} = {}) {
  const _style = this._makeStyle(style);
  this._olLayer = new ol.layer.Vector({
    name: this.name,
    id: this.id,
    style: _style,
    source: new ol.source.Vector({})
  })
};

proto._makeStyle = function(styleConfig) {
  let style;
  const styles = {};
  if (styleConfig) {
    Object.entries(styleConfig).forEach(([type, config]) => {
      switch (type) {
        case 'point':
          if (config.icon) {
            styles.image = new ol.style.Icon({
              src: config.icon.url,
              imageSize: config.icon.width
            })
          }
          break;
        case 'line':
          styles.stroke = new ol.style.Stroke({
            color: config.color,
            width: config.width
          });
          break;
        case 'polygon':
          styles.fill = new ol.style.Fill({
            color: config.color
          });
          break
      }
    });
    style = new ol.style.Style(styles);
  }
  return style
};

proto.getFeatures = function(options={}) {
  const d = $.Deferred();
  this.provider.getFeatures(options)
    .then((features) => {
      this.addFeatures(features);
      d.resolve(features);
    })
    .fail((err) => {
      d.reject(err)
    });
  return d.promise()
};

proto.addFeatures = function(features=[]) {
  this.getSource().addFeatures(features)
};

proto.addFeature = function(feature) {
  if (feature) {
    this.getSource().addFeature(feature)
  }
};

proto.getOLLayer = function() {
  if (this._olLayer) {
    return this._olLayer
  } else {
    const id = this.id;
    const geometryType =  this.geometryType;
    const color = this.color;
    const style = this.style ? createLayerStyle(this.style) : null;
    this._olLayer = createOlLayer({
      id,
      geometryType,
      color,
      style
    })
  }
  return this._olLayer;
};

proto.setOLLayer = function(olLayer) {
  this._olLayer = olLayer;
};

proto.getSource = function() {
  if (!this._olLayer)
    this.getOLLayer();
  return this._olLayer.getSource();
};

proto.setSource = function(source) {
  this._olLayer.setSource(source);
};

proto.setStyle = function(style) {
  this._olLayer.setStyle(style);
};

proto.getFeatureById = function(fid){
  if (fid) {
    return this._olLayer.getSource().getFeatureById(fid);
  }
};

proto.isVisible = function() {
  return this._olLayer.getVisible();
};

proto.setVisible = function(bool) {
  this._olLayer.setVisible(bool);
};

proto.clear = function(){
  this.getSource().clear();
};

proto.addToMap = function(map){
  map.addLayer(this._olLayer);
};


