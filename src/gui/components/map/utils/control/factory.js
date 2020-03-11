const ResetControl = require('g3w-ol/controls/resetcontrol');
const QueryControl = require('g3w-ol/controls/querycontrol');
const ZoomBoxControl = require('g3w-ol/controls/zoomboxcontrol');
const QueryBBoxControl = require('g3w-ol/controls/querybboxcontrol');
const QueryByPolygonControl = require('g3w-ol/controls/querybypolygoncontrol');
const GeolocationControl = require('g3w-ol/controls/geolocationcontrol');
const StreetViewControl = require('g3w-ol/controls/streetviewcontrol');
const AddLayersControl = require('g3w-ol/controls/addlayers');
const LengthControl = require('g3w-ol/controls/lengthcontrol');
const AreaControl = require('g3w-ol/controls/areacontrol');
const Control = require('g3w-ol/controls/control');
const OLControl = require('g3w-ol/controls/olcontrol');
const NominatimControl = require('g3w-ol/controls/nominatimcontrol');
const MousePositionControl = require('g3w-ol/controls/mousepositioncontrol');
const ScaleControl = require('g3w-ol/controls/scalecontrol');
const OnClikControl = require('g3w-ol/controls/onclickcontrol');
const ScreenshotControl = require('g3w-ol/controls/screenshotcontrol');


const ControlsFactory = {
  create: function(options={}) {
    let control;
    const ControlClass = ControlsFactory.CONTROLS[options.type];
    if (ControlClass) {
      control = new ControlClass(options);
    }
    const visible = (control instanceof Control && control.isVisible) ? control.isVisible() : true;
    return visible ? control: null
  }
};

ControlsFactory.CONTROLS = {
  'reset': ResetControl,
  'zoombox': ZoomBoxControl,
  'zoomtoextent': OLControl,
  'query': QueryControl,
  'querybbox': QueryBBoxControl,
  'querybypolygon': QueryByPolygonControl,
  'geolocation': GeolocationControl,
  'streetview': StreetViewControl,
  'zoom': OLControl,
  'scaleline': OLControl,
  'overview': OLControl,
  'nominatim': NominatimControl,
  'addlayers': AddLayersControl,
  'length': LengthControl,
  'area': AreaControl,
  'mouseposition': MousePositionControl,
  'scale': ScaleControl,
  'onclick': OnClikControl,
  'screenshot': ScreenshotControl
};

module.exports = ControlsFactory;
