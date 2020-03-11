const translations = {
  "it": {
    "translation": {
      "yes": "Si",
      "no": "No",
      "back":"Indietro",
      "backto": "Torna a ",
      "changemap": "Cambia Mappa",
      "component": "Componente Generico",
      "search": "Ricerche",
      "no_results": "Nessun risultato trovato",
      "print": "Stampa",
      "create_print": "Crea Stampa",
      "dosearch": "Cerca",
      "metadata": {},
      "catalog": "Mappa",
      "data": "Dati",
      "baselayers": "Basi",
      "tools": "Strumenti",
      "tree": "Strati",
      "legend": "Legenda",
      "nobaselayer": "Nessuna mappa di base",
      "street_search": "Cerca indirizzo",
      "show": "Mostra",
      "hide": "Nascondi",
      "copy_form_data": "Copia i dati del modulo",
      "paste_form_data": "Incolla",
      "copy_form_data_from_feature": "Copia i dati dalla mappa",
      "error_map_loading": "Errore di caricamento della nuova mappa",
      "check_internet_connection_or_server_admin": "Controllare la connessione internet o contattare l'amministratore",
      "could_not_load_vector_layers": "Errore di connessione al server: non è stato possibile caricare i vettoriali richiesti",
      "server_saver_error": "Errore nel salvataggio sul server",
      "server_error": "Si è verificato un errore nella richiesta al server",
      "save": "Salva",
      "cancel": "Cancella",
      "close": "Chiudi",
      "add": "Aggiungi",
      "exitnosave": "Esci senza salvare",
      "annul": "Annulla",
      "layer_is_added": "Layer già aggiunto",
      "sidebar": {},
      "info": {
        "title": "Risultati",
        "open_link": "Apri documento allegato",
        "server_error": "Si è verificato un errore nella richiesta al server",
        "no_results": "Nessun risultato per questa interrogazione/ricerca ",
        "link_button": "Apri"
      },
      "template": {
        g3wSuiteFramework: "Applicativo realizzato con il framework OS",
        productOf: "Prodotto da",
        logout: "Esci",
        no_other_projects: "Non ci sono altri progetti in questo gruppo cartografico",
        usermessage: {
          info: "Informazioni",
          warning: "Attenzione",
          alert: "Errore",
          success: "Success",
          tool: "Strumenti"
        }
      },
      "sdk": {
        search: {
          all: 'TUTTE',
          layer_not_searchable: "Il layer non è ricercabile"
        },
        print: {
          no_layers: 'Nessun Layer visibile',
          scale: "Scala",
          format: "Formato",
          rotation: "Rotazione"
        },
        errors: {
          layers: {
            load: "Alcuni layers presenti nel progetto non sono attualmente disponibili e quindi non compaiono nell'attuale visualizzazione"
          }
        },
        metadata: {
          "title": "Metadati",
          'groups': {
            'general': {
              'title': 'GENERALE',
              'fields': {
                'title': 'TITOLO',
                'name': 'NOME',
                'description': "DESCRIZIONE",
                'abstract': "ABSTRACT",
                'keywords': 'LISTA DELLE PAROLE CHIAVE',
                "fees": "CANONI",
                "accessconstraints": "VINCOLI DI ACCESSO",
                'contactinformation': "CONTATTI",
                'subfields': {
                  'contactinformation': {
                    'contactelectronicmailaddress': "E-mail",
                    'personprimary': 'Riferimenti',
                    'contactvoicetelephone': 'Telefono',
                    'contactorganization': 'Organizzazione',
                    'contactposition': 'Posizione',
                    'contactperson': 'Persona'
                  }
                },
                'wms_url': "WMS"
              }
            },
            'spatial':{
              'title': 'INFO SPAZIALI',
              'fields' : {
                'crs': 'EPSG',
                'extent': 'BBOX'
              }
            },
            'layers': {
              'title': 'STRATI',
              'groups' : {
                'general': 'GENERALE',
                'spatial': 'INFO SPAZIALI'
              },
              'fields': {
                'layers': 'STRATI',
                'subfields': {
                  'crs': 'EPSG',
                  'bbox': 'BBOX',
                  'title': "TITOLO",
                  'name': 'NOME',
                  'geometrytype': 'GEOMETRIA',
                  'source': 'SORGENTE',
                  'attributes': 'ATTRIBUTI',
                  'abstract': 'ABSTRACT',
                  'attribution': 'ATTRIBUTION',
                  'keywords': "PAROLE CHIAVE",
                  'metadataurl':'METADATA URL',
                  'dataurl': "DATA URL"
                }
              }
            }
          }
        },
        mapcontrols: {
          query: {
            actions: {
              show_map: {
                hint: "Visualizza sulla mappa"
              }
            }
          },
          querybypolygon: {
            help: `<h4>Guida - Query By Polygon</h4>
                  <ul style="padding-left: 10px;">
                    <li style="font-size:0.8em;">Seleziona uno strato poligonale in legenda.</li>
                    <li style="font-size:0.8em;">Assicurati che lo strato sia visibile in mappa.</li>
                    <li style="font-size:0.8em;">Clicca su una geometria dello strato selezionato.</li>
                  </ul>`
          },
          querybybbox: {
            help: `<h4>Guida - Query BBox layer</h4>
                   <ul style="padding-left: 10px;">
                    <li style="font-size:0.8em;">Disegna un rettangolo per interrogare gli strati evidenziati in giallo</li>
                   </ul>`
          },
          measures: {
            length: {
              tooltip: "Lunghezza",
              help: "Clicca sulla mappa per continuare a disegnare la linea.<br>CANC se si vuole cancellare l\'ultimo vertice inserito",
            },
            area: {
              tooltip: "Area",
              help: "Click per continuare a disegnare il poligono.<br>CANC se si vuole cancellare l'ultimo vertice inserito"
            }
          }
        },
        relations: {
          relation_data: 'Dati Relazione',
          no_relations_found: 'Nessuna relazione trovata',
          back_to_relations: 'Ritorna alle relazioni',
          list_of_relations_feature: 'Lista delle relazioni della feature',
          error_missing_father_field: "Il campo relazionato non esiste"
        },
        workflow: {
          steps: {
            title: 'Passi'
          }
        },
        form: {
          loading: 'Caricamento ...',
          inputs: {
            input_validation_mutually_exclusive: "Campo mutualmente esclusivo con ",
            input_validation_error: "Campo obbligatorio o tipo valore non corretto",
            input_validation_min_field: "Valore deve essere magiore uguale a quello del camp ",
            input_validation_max_field: "Valore deve essere minore uguale a quello del campo ",
            input_validation_exclude_values: "Campo deve contenere un valore diverso",
            integer: "intero",
            text: "testuale",
            textarea: "testuale",
            string: "stringa",
            date: "data",
            float: "float",
            table: "table"
          },
          footer: {
            required_fields: "Campi richiesti"
          },
          messages: {
            qgis_input_widget_relation: "Gestisci le relazioni tramite form dedicato"
          }
        },
        catalog: {
          menu: {
            wms: {
              title:"",
              copy: "Clicca qui per copiare url",
              copied: "Copiato"
            }
          }
        },
        wps: {
          list_process: "Lista dei processi",
          tooltip: 'Clicca sulla mappa'
        }
      },
      "mapcontrols": {
        "geolocations": {
          "title": "",
          "error": "Non è possibile calcolare la tua posizione."
        },
        "nominatim": {
          "placeholder": "Indirizzo ...",
          "noresults": "Nessun risultato",
          "notresponseserver": "Il server non risponde"
        },
        "add_layer_control": {
          "header": "Aggiungi Layer",
          "select_projection": "Seleziona il sistema di proiezione del layer",
          "select_color": "Seleziona il colore del Layer",
          "drag_layer": "Trascina il layer in questa area"
        },
        "query": {
          "input_relation": "Clicca per consultare le relazioni"
        },
        "length": {
          "tooltip": "Lunghezza"
        },
        "area": {
          "tooltip": "Area"
        }
      },
      "catalog_items": {
        "helptext": "Tasto destro sui singoli layer per accedere alle funzionalità aggiuntive",
        "contextmenu": {
          "zoomtolayer": "Zoom to Layer",
          "open_attribute_table": "Apri la tabella degli attibuti",
          "show_metadata": "Metadati"
        }
      },
      "dataTable": {
        "previous": "Precedente",
        "next": "Successivo",
        "info": "Visualizzazione _START_ a _END_ su _TOTAL_ righe",
        "nodatafilterd": "Nessun risultato trovato",
        "infoFiltered": "(Filtrati da _MAX_ total righe)"
      }
    }
  },
  "en": {
    "translation": {
      "yes": "Yes",
      "no": "No",
      "back": "Back",
      "backto": "Back to ",
      "changemap": "Change Map",
      "component": "Generic Component",
      "search": "Search",
      "no_results": "No results found",
      "print": "Print",
      "create_print": "Create Print",
      "dosearch": "Search",
      "catalog": "Map",
      "data": "Data",
      "baselayers": "Base",
      "tools": "Tools",
      "tree": "Layers",
      "legend": "Legend",
      "nobaselayer": "No basemap",
      "street_search": "Find Address",
      "show": "Show",
      "hide": "Hide",
      "copy_form_data": "Copy data",
      "paste_form_data": "Paste",
      "copy_form_data_from_feature": "Copy data from map",
      "error_map_loading": "Error occurs loading map",
      "check_internet_connection_or_server_admin": "Check internet connection or contact admin",
      "could_not_load_vector_layers": "Connection error: Layers can be loaded",
      "server_saver_error": "Error in server saving",
      "server_error": "Server connection error",
      "save": "Save",
      "cancel": "Cancel",
      "close": "Close",
      "add": "Add",
      "exitnosave": "Exit without save",
      "annul": "Cancel",
      "layer_is_added": "Layer already added",
      "sidebar": {},
      "info": {
        "title": "Results",
        "open_link": "Open attached document",
        "server_error": "An error occurred from server",
        "no_results": "No results found for this query/search",
        "link_button": "Open"
      },
      "template": {
        g3wSuiteFramework: "Application based on OS framework",
        productOf: "A product of",
        logout: "Logout",
        no_other_projects: "No more project for this group",
        usermessage: {
          info: "Information",
          warning: "Warning",
          alert: "Alert",
          success: "Success",
          tool: "Tool"
        }
      },
      "sdk": {
        search: {
          all: 'ALL',
          layer_not_searchable: "Layer not searchable"
        },
        print: {
          no_layers: 'No Layer to print',
          scale: "Scale",
          format: "Format",
          rotation: "Rotation"
        },
        errors: {
          layers: {
            load: "Some layers are not available"
          }
        },
        metadata: {
          'title': 'Metadata',
          'groups': {
            'general': {
              'title': 'GENERAL',
              'fields': {
                'title': 'TITLE',
                'name': 'NAME',
                'description': "DESCRIPTION",
                'abstract': "ABASTRACT",
                'keywords': 'KEYWORDS',
                "fees": "FEES",
                "accessconstraints": "ACCESS CONSTRAINT",
                'contactinformation': "CONTACTS",
                'subfields': {
                  'contactinformation': {
                    'contactelectronicmailaddress': "Email",
                    'personprimary': 'Refereces',
                    'contactvoicetelephone': 'Phone',
                    'contactorganization': 'Organization',
                    'contactposition': 'Position',
                    'contactperson': 'Person'
                  }
                },
                'wms_url': "WMS"
              }
            },
            'spatial':{
              'title': 'SPATIAL',
              'fields' : {
                'crs': 'EPSG',
                'extent': 'BBOX'
              }
            },
            'layers': {
              'title': 'LAYERS',
              'fields': {
                'layers': 'LAYERS',
                'subfields': {
                  'crs': 'EPSG',
                  'bbox': 'BBOX',
                  'title': "TITLE",
                  'name': 'NAME',
                  'geometrytype': 'GEOMETRY',
                  'source': 'SOURCE',
                  'attributes': 'ATTRIBUTES',
                  'abstract': 'ABSTRACT',
                  'attribution': 'ATTRIBUTION',
                  'keywords': "PAROLE CHIAVE",
                  'metadataurl':'METADATA URL',
                  'dataurl': "DATA URL"
                }
              },
              'groups' : {
                'general': 'GENERAL',
                'spatial': 'SPATIAL'
              }
            }
          }
        },
        mapcontrols: {
          query: {
            actions: {
              show_map: {
                hint: "Show on map"
              }
            }
          },
          querybypolygon: {
            help: `<h4>Guide - Query By Polygon</h4>
                  <ul style="padding-left: 10px;">
                    <li style="font-size:0.8em;">Select a polygon layer on TOC.</li>
                    <li style="font-size:0.8em;">Be sure that layer is visible.</li>
                    <li style="font-size:0.8em;">Click on a feature of selected layer.</li>
                  </ul>`
          },
          querybybbox: {
            help: `<h4>Guide - Query BBox layer</h4>
                   <ul style="padding-left: 10px;">
                    <li style="font-size:0.8em;">Draw a square on map to query underlined layers on TOC</li>
                   </ul>`
          },
          measures: {
            length: {
              tooltip: "Length",
              help: "Click on map to draw the line. Press <br>CANC if you want delete last vertex",
            },
            area: {
              tooltip: "Area",
              help: "Click to draw poligon.Press <br>CANC if you want delete last vertex"
            }
          }
        },
        relations: {
          relation_data: 'Relation data',
          no_relations_found: 'No relations found',
          back_to_relations: 'Back to relations',
          list_of_relations_feature: 'List of relations of feature',
          error_missing_father_field: "Field is missing"
        },
        workflow: {
          steps: {
            title: 'Steps'
          }
        },
        form: {
          loading: 'Loading ...',
          inputs: {
            input_validation_mutually_exclusive: "Field mutually exclusive with ",
            input_validation_error: "Mandatory Field or wrong data type",
            input_validation_min_field: "Value has to be more/equal to field value  ",
            input_validation_max_field: "Value has to be less/equal to field value ",
            input_validation_exclude_values: "Value has to be unique",
            integer: "integer",
            text: "text",
            textarea: "text",
            string: "string",
            date: "date",
            float: "float",
            table: "table"
          },
          footer: {
            "required_fields": "Required fields"
          },
          messages: {
            qgis_input_widget_relation: "Use relation specific form to work with relation"
          }
        },
        catalog: {
          menu: {
            wms: {
              titel:"",
              copy: "Click here to copy url",
              copied: "Copied"
            }
          }
        },
        wps: {
          list_process: "List of process",
          tooltip: 'Click on map'
        }
      },
      "mapcontrols": {
        "geolocations": {
          "error": "Can't get your position"
        },
        "nominatim": {
          "placeholder": "Address ...",
          "noresults": "No results",
          "notresponseserver": "No response from server"
        },
        "add_layer_control": {
          "header": "Add Layer",
          "select_projection": "Select layer projection",
          "select_color": "Select Layer Color",
          "drag_layer": "Drag and drop layer here"
        },
        "query": {
          "input_relation": "Click to show relations"
        },
        "length": {
          "tooltip": "Length"
        },
        "area": {
          "tooltip": "Area"
        }
      },
      "catalog_items": {
        "helptext": "Right-click on individual layer to access additional features",
        "contextmenu": {
          "zoomtolayer": "Zoom to Layer",
          "open_attribute_table": "Open Attribute Table",
          "show_metadata": "Metadata"
        }
      },
      "dataTable": {
        "previous": "Previous",
        "next": "Next",
        "info": "Showing _START_ to _END_ of _TOTAL_ entries",
        "no_data": "No data",
        "nodatafilterd": "No matching records found",
        "infoFiltered": "(filtered from _MAX_ total records)"
      }
    }
  }
};

module.exports = translations;
