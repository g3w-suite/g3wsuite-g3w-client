const core = {
  G3WObject: require('core/g3wobject'),
  utils: require('core/utils/utils'),
  geoutils: require('core/utils/geo'),
  ApplicationService: require('core/applicationservice'),
  ApiService: require('core/apiservice'),
  Router: require('core/router'),
  i18n: require('core/i18n/i18n.service'),
  errors: {
    parsers: {
      Server: require('core/errors/parser/servererrorparser')
    }
  },
  editing: {
    Session: require('core/editing/session'),
    SessionsRegistry: require('core/editing/sessionsregistry'),
    Editor: require('core/editing/editor'),
    ChangesManager: require('core/editing/changesmanager')
  },
  geometry: {
    Geom: require('core/geometry/geom'),
    Geometry: require('core/geometry/geometry')
  },
  project: {
    ProjectsRegistry: require('core/project/projectsregistry'),
    Project: require('core/project/project')
  },
  map: {
    MapLayersStoreRegistry: require('core/map/maplayersstoresregistry')
  },
  catalog: {
    CatalogLayersStoresRegistry: require('core/catalog/cataloglayersstoresregistry')
  },
  layer: {
    LayersStoreRegistry: require('core/layers/layersstoresregistry'), //nel caso un plugin volesse instanziare un layersstoreregistry proprio
    LayersStore: require('core/layers/layersstore'),
    Layer: require('core/layers/layer'),
    LayerFactory: require('core/layers/layerfactory'),
    TableLayer: require('core/layers/tablelayer'),
    VectorLayer: require('core/layers/vectorlayer'),
    ImageLayer: require('core/layers/imagelayer'),
    WmsLayer: require('core/layers/map/wmslayer'),
    XYZLayer: require('core/layers/map/xyzlayer'),
    MapLayer: require('core/layers/map/maplayer'),
    geometry: {
      Geometry: require('core/geometry/geometry'),
      geom: require('core/geometry/geom')
    },
    features: {
      Feature: require('core/layers/features/feature'),
      FeaturesStore: require('core/layers/features/featuresstore'),
      OlFeaturesStore: require('core/layers/features/olfeaturesstore')
    },
    filter: {
      Filter: require('core/layers/filter/filter'),
      Expression: require('core/layers/filter/expression')
    }
  },
  interaction: {
    PickCoordinatesInteraction: require('g3w-ol/interactions/pickcoordinatesinteraction'),
    PickFeatureInteraction: require('g3w-ol/interactions/pickfeatureinteraction')
  },
  plugin: {
    Plugin: require('core/plugin/plugin'),
    PluginsRegistry: require('core/plugin/pluginsregistry'),
    PluginService: require('core/plugin/pluginservice')
  },
  workflow: {
    Task: require('core/workflow/task'),
    Step: require('core/workflow/step'),
    Flow: require('core/workflow/flow'),
    Workflow: require('core/workflow/workflow'),
    WorkflowsStack: require('core/workflow/workflowsstack')
  }
};

const gui = {
  GUI: require('gui/gui'),
  Panel: require('gui/components/panel'),
  ControlFactory: require('gui/components/map/utils/control/factory'),
  ComponentsFactory: require('gui/components/componentsfactory'),
  vue: {
    Component: require('gui/components/vue/component'),
    Panel: require('gui/components/panel'),
    MetadataComponent: require('gui/components/metadata/metadata'),
    SearchComponent: require('gui/components/search/search'),
    SearchPanel: require('gui/components/search/panel/searchpanel'),
    PrintComponent: require('gui/components/print/print'),
    CatalogComponent: require('gui/components/catalog/catalog'),
    MapComponent: require('gui/components/map/map'),
    ToolsComponent: require('gui/components/tools/tools'),
    QueryResultsComponent : require('gui/components/queryresults/queryresults'),
    // main Form Component
    FormComponent: require('gui/components/form/form'),
    // Form Components
    FormComponents: {
      Body: require('gui/components/form/components/body/body'),
      Footer: require('gui/components/form/components/footer/footer')
    },
    Inputs: {
      InputsComponents: require('gui/components/inputs/inputs')
    },
    Charts: {
      ChartsFactory: require('gui/components/charts/chartsfactory'),
      c3: {
        lineXY: require('gui/components/charts/c3/line/lineXY')
      }
    },
    Fields : require('gui/components/fields/fields'),
    Mixins: require('gui/components/vue/vue.mixins'),
    services: {
      SearchPanel: require('gui/components/search/panel/searchservice')
    }
  }
};

const ol = {
  interactions : {
    PickFeatureInteraction : require('g3w-ol/interactions/pickfeatureinteraction'),
    PickCoordinatesInteraction: require('g3w-ol/interactions/pickcoordinatesinteraction'),
    DeleteFeatureInteraction: require('g3w-ol/interactions/deletefeatureinteraction')
  },
  controls: {},
  utils: require('g3w-ol/utils/utils')
};


export default {
  core,
  gui,
  ol
};
