const GENERIC_GRID_EXTENT = [0,0,8388608,8388608];

const Projection = function(options={}) {
  if (!options.crs) return null;
  options.proj4def && proj4.defs(options.crs, options.proj4def);
  this._axisOrientation = options.axisOrientation || 'enu';
  if (options.proj4def) {
    const proj4def = proj4.defs(options.crs);
    if ( proj4def.axis !== undefined)
      this._axisOrientation = proj4def.axis;
    if (options.crs === 'EPSG:3045' || options.crs === 'EPSG:6708')
      this._axisOrientation = 'neu';
  }
  ol.proj.Projection.call(this, {
    code: options.crs,
    extent: options.extent ? options.extent : GENERIC_GRID_EXTENT,
    axisOrientation: this._axisOrientation
  });
};

ol.inherits(Projection, ol.proj.Projection);

const proto = Projection.prototype;

proto.getAxisOrientation = function() {
  return this._axisOrientation;
};

proto.isInvertedAxisOrientation = function() {
  return this._axisOrientation === 'neu';
};

proto.getOlProjection = function() {};

module.exports = Projection;
