const Projections = require('g3w-ol/projection/projections');
const { getScaleFromResolution } = require('g3w-ol/utils/utils');
const { sanitizeUrl } = require('core/utils/utils');

const RESERVERDPARAMETRS = {
  wms: ['VERSION', 'REQUEST', 'BBOX', 'LAYERS', 'WIDTH', 'HEIGHT', 'DPI', 'FORMAT', 'CRS']
};

function GeoLayerMixin(config={}) {}

const proto = GeoLayerMixin.prototype;

proto.setup = function(config={}, options={}) {
  if (!this.config) {
    console.log("GeoLayerMixin must be used from a valid (geo) Layer instance");
    return;
  }
  const {project} = options;
  this.config.map_crs = 1*project.getProjection().getCode().split('EPSG:')[1];
  this.config.multilayerid = config.multilayer;
  // state extend of layer setting geolayer property to true
  // and adding informations of bbox
  _.extend(this.state, {
    geolayer: true,
    external: config.source && config.source.external || false,
    bbox: config.bbox || null,
    visible: config.visible || false,
    checked: config.visible || false,
    hidden: config.hidden || false,
    scalebasedvisibility: config.scalebasedvisibility || false,
    minscale: config.minscale,
    maxscale: config.maxscale,
    ows_method: config.ows_method,
    exclude_from_legend: (typeof config.exclude_from_legend == 'boolean') ? config.exclude_from_legend : true
  });
  if (config.projection) {
    if (config.projection.getCode() === config.crs)
      this.config.projection = config.projection;
    else
      this.config.projection = Projections.get(config.crs,config.proj4);
  } else if (config.attributions) {
    this.config.attributions = config.attributions;
  }
  config.source && config.source.url && this._sanitizeSourceUrl()
};

proto._sanitizeSourceUrl = function(type='wms'){
  const sanitizedUrl = sanitizeUrl({
    url: this.config.source.url,
    reserverParameters: RESERVERDPARAMETRS[type]
  });
  this.config.source.url = sanitizedUrl;
};

proto.setChecked = function(bool) {
  this.state.checked = bool;
};

proto.isChecked = function() {
  return this.state.checked;
};

proto.setVisible = function(visible) {
  this.state.visible = visible;
};

proto.getStyle = function() {
  return this.config.style;
};

proto.setStyle = function(style) {
  this.config.style = style;
};

proto.isDisabled = function() {
  return this.state.disabled;
};

proto.isPrintable = function({scale}={}) {
  const ProjectsRegistry = require('core/project/projectsregistry');
  const QGISVERSION = ProjectsRegistry.getCurrentProject().getQgisVersion({
    type: 'major'
  });
  const visible = QGISVERSION === 3 ? !this.state.groupdisabled : true;
  return this.isChecked() && visible && (!this.state.scalebasedvisibility || (scale >= this.state.maxscale && scale <= this.state.minscale));
};

proto.setDisabled = function(resolution, mapUnits='m') {
  const ProjectsRegistry = require('core/project/projectsregistry');
  const QGISVERSION = ProjectsRegistry.getCurrentProject().getQgisVersion({
    type: 'major'
  });
  if (this.state.scalebasedvisibility) {
    const mapScale = getScaleFromResolution(resolution, mapUnits);
    this.state.disabled = !(mapScale >= this.state.maxscale && mapScale <= this.state.minscale);
    this.state.disabled = (QGISVERSION === 3 && this.state.minscale === 0) ? !(mapScale >= this.state.maxscale) : this.state.disabled;
  } else {
    this.state.disabled = false;
  }
};

proto.getMultiLayerId = function() {
  return this.config.multilayerid;
};

proto.getGeometryType = function() {
  return this.config.geometrytype;
};

proto.getOwsMethod = function() {
  return this.config.ows_method;
};

proto.setProjection = function(crs,proj4) {
  this.config.projection = Projections.get(crs,proj4);
};

proto.getProjection = function() {
  return this.config.projection;
};

proto.getCrs = function() {
  if (this.config.projection) {
    return this.config.projection.getCode();
  }
};

proto.isCached = function() {
  return this.config.cache_url && this.config.cache_url !== '';
};

proto.getCacheUrl = function() {
  if (this.isCached()) {
    return this.config.cache_url;
  }
};

// return if layer has inverted axis
proto.hasAxisInverted = function() {
  const projection = this.getProjection();
  const axisOrientation = projection.getAxisOrientation ? projection.getAxisOrientation() : "enu";
  return axisOrientation.substr(0, 2) === 'ne';
};

proto.getMapLayer = function() {
  console.log('overwrite by single layer')
};

proto.setMapProjection = function(mapProjection) {
  this._mapProjection = mapProjection;
};

proto.getMapProjection = function() {
  return this._mapProjection;
};

module.exports = GeoLayerMixin;
