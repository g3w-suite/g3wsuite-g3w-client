const i18ninit = require('api').core.i18n.init;
const ApplicationService = require('api').core.ApplicationService;
// ApplicationTemplate instance. It manages the application template
const ApplicationTemplate = require('gui/template');
// Main applcation config file
const config = require('../config/app/config');
// set the global enviromental variable g3wsdk. It used by plugins to load sdk class and instances
window.g3wsdk = require('api');

// main function to create the start application configuration
function createApplicationConfig() {
  return {
    apptitle: config.apptitle || '',
    logo_img: config.group.header_logo_img,
    logo_link: config.group.header_logo_link,
    terms_of_use_text: config.group.header_terms_of_use_text,
    terms_of_use_link: config.group.terms_of_use_link,
    header_custom_links: config.group.header_custom_links,
    debug: config.client.debug || false,
    group: config.group,
    urls: config.server.urls,
    mediaurl: config.server.urls.mediaurl,
    resourcesurl: config.server.urls.clienturl,
    vectorurl:config.server.urls.vectorurl,
    projects: config.group.projects,
    initproject: config.group.initproject,
    overviewproject: (config.group.overviewproject && config.group.overviewproject.gid) ? config.group.overviewproject : null,
    baselayers: config.group.baselayers,
    mapcontrols: config.group.mapcontrols,
    background_color: config.group.background_color,
    crs: config.group.crs,
    proj4: config.group.proj4,
    minscale: config.group.minscale,
    maxscale: config.group.maxscale,
    main_map_title: config.main_map_title,
    credits: config.credits,
    layout: config.group.layout || {},
    // needed by ProjectService
    getWmsUrl: function(project) {
      return `${config.server.urls.baseurl+config.server.urls.ows}/${config.group.id}/${project.type}/${project.id}/`;
    },
    // needed by ProjectsRegistry to get informations about project configuration
    getProjectConfigUrl: function(project) {
      return `${config.server.urls.baseurl+config.server.urls.config}/${config.group.id}/${project.type}/${project.id}`;
    },
    plugins: config.group.plugins,
    tools: config.tools,
    views: config.views || {},
    user: config.user || null
  };
}

// frun when app.js is loaded
const bootstrap = function() {
  function handleError(error) {
    if (error && error.responseJSON && error.responseJSON.error.data) {
      error = error.responseJSON.error.data
    } else {
      error = null
    }
    return error;
  }
  // add all configurations
  //addConfigurationFromOtherModules();
  //get all configuration from groups
  //config.server.urls.initconfig: api url to get starting configuration
  ApplicationService.obtainInitConfig({
    initConfigUrl: config.server.urls.initconfig
  })
  //returna promise with starting configuration
  .then((initConfig) => {
    // write urls of static files and media url (base url and vector url)
    config.server.urls.baseurl = initConfig.baseurl;
    config.server.urls.frontendurl = initConfig.frontendurl;
    config.server.urls.staticurl = initConfig.staticurl;
    config.server.urls.clienturl = initConfig.staticurl+initConfig.client;
    config.server.urls.mediaurl = initConfig.mediaurl;
    config.server.urls.vectorurl = initConfig.vectorurl;
    config.main_map_title = initConfig.main_map_title;
    config.group = initConfig.group;
    config.user = initConfig.user;
    config.credits = initConfig.credits;
    // get language from server
    config.i18n.lng = config.user.i18n;
    // create application configuration
    const applicationConfig = createApplicationConfig();
    // check if is inside a iframe
    config.group.layout.iframe = window.top !== window.self;
    // inizialize internalization
    i18ninit(config.i18n);
    // set accept-language reuest header based on config language
    //jquery
    const language = config.i18n.lng || 'en';
    $.ajaxSetup({
      beforeSend: function (jqXHR) {
        jqXHR.setRequestHeader('Accept-Language', language);
      }
    });

    ApplicationService.init(applicationConfig)
      .then(() => {
        //create the ApplicationTemplate instance passing the template configuration
        // and the applicationService instance that is useful to work with project API
        const applicationTemplate = new ApplicationTemplate({
          ApplicationService
        });
        // Listen ready event emit after build interface
        applicationTemplate.on('ready', () =>  {
          ApplicationService.postBootstrap()
        });
        //call initialize applicationTemplate method
        applicationTemplate.init();
      })
      .fail((error) => {
        error = handleError(error);
        ApplicationTemplate.fail({
          language,
          error
        });
      })
  })
  .fail((error) => {
    const language = config.i18n.lng || 'en';
    // inizialize internalization
    error = handleError(error);
    ApplicationTemplate.fail({
      language,
      error
    });
  })
};

// run  bootstrap function
bootstrap();

