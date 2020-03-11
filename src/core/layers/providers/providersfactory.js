const Providers = {
  geojson: require('./geojsonprovider'),
  kml: require('./kmlprovider'),
  xml: require('./xmlprovider'),
  qgis: require('./qgisprovider'),
  wms: require('./wmsprovider'),
  wfs: require('./wfsprovider')
};

const ProvidersForServerTypes = {
  'QGIS': {
    'postgres': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: Providers.qgis,
      search: Providers.qgis
    },
    'spatialite': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: Providers.qgis,
      search: Providers.qgis
    },
    'ogr': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: null,
      search: Providers.qgis
    },
    'delimitedtext': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: Providers.qgis,
      search: Providers.qgis
    },
    'wms': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: null,
      search: null
    },
    'wfs': {
      query: Providers.wms,
      filter: Providers.wfs,
      data: Providers.wfs,
      search: Providers.qgis
    },
    'gdal': {
      query: Providers.wms,
      filter: null,
      data: null,
      search: null
    },
    'arcgismapserver': {
      query: Providers.wms,
      filter: null,
      data: null,
      search: null
    }
  },
  'OGC': {
    'wms': {
      query: Providers.wms,
      filter: null,
      data: null,
      search: null
    }
  },
  'G3WSUITE': {
    'geojson': {
      query: Providers.geojson,
      filter: null,
      data: Providers.geojson,
      search: null
    }
  }
};

function ProviderFactory() {
  this.build = function(providerType,serverType,sourceType,options) {
    // return instace of seletced provider
    const providerClass = this.get(providerType,serverType,sourceType);
    if (providerClass) {
      return new providerClass(options);
    }
    return null;
  };

  this.get = function(providerType,serverType,sourceType) {
    return ProvidersForServerTypes[serverType][sourceType][providerType];
  }
}

module.exports = new ProviderFactory();
