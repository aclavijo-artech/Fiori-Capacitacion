> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## Package

```json
{
  "_version": "1.65.0", // Versión mínima del descriptor de aplicación

  "sap.app": {
    "id": "clase4", // ID único de la app. También se usa como namespace (espacio de nombres)
    "type": "application", // Tipo de aplicación (UI5 estándar)
    "i18n": "i18n/i18n.properties", // Ruta al archivo de internacionalización (idiomas)
    "applicationVersion": {
      "version": "0.0.1" // Versión de la app
    },
    "title": "{{appTitle}}", // Título de la app, viene del archivo i18n
    "description": "{{appDescription}}", // Descripción de la app (también desde i18n)
    "resources": "resources.json", // Archivo que define los recursos externos
    "sourceTemplate": {
      "id": "@sap/generator-fiori:lrop", // Plantilla usada para generar esta app (List Report Object Page)
      "version": "1.16.1",
      "toolsId": "828174eb-1f1a-4b2e-833a-0030755c4db1" // ID interno del generador
    },
    "dataSources": {
      // Fuente principal de datos (OData de Northwind)
      "mainService": {
        "uri": "/V2/Northwind/Northwind.svc/", // Ruta del servicio (mapeado por el proxy local)
        "type": "OData", // Tipo de servicio
        "settings": {
          "annotations": [
            "annotation" // Asociamos anotaciones al modelo principal
          ],
          "localUri": "localService/metadata.xml", // Metadata local para el mockserver
          "odataVersion": "2.0" // Versión del protocolo OData
        }
      },
      // Fuente de anotaciones OData (usada por Fiori Elements para interpretar metadata)
      "annotation": {
        "type": "ODataAnnotation",
        "uri": "annotations/annotation.xml",
        "settings": {
          "localUri": "annotations/annotation.xml" // Ruta local para desarrollo/mock
        }
      }
    }
  },

  "sap.ui": {
    "technology": "UI5", // Tecnología usada (SAPUI5)
    "icons": {
      "icon": "",
      "favIcon": "",
      "phone": "",
      "phone@2": "",
      "tablet": "",
      "tablet@2": ""
    },
    "deviceTypes": {
      "desktop": true,
      "tablet": true,
      "phone": true // Compatible con todos los dispositivos
    }
  },

  "sap.ui5": {
    "flexEnabled": true, // Habilita la personalización (Flex Layer, Adapt UI)
    "dependencies": {
      "minUI5Version": "1.139.0", // Versión mínima requerida
      "libs": {
        "sap.m": {}, // Controles móviles
        "sap.ui.core": {}, // Núcleo de UI5
        "sap.ushell": {}, // Integración con Launchpad/Work Zone
        "sap.f": {}, // Flexible Column Layout, etc.
        "sap.ui.comp": {}, // Smart Controls (SmartFilterBar, SmartTable)
        "sap.ui.generic.app": {}, // Base para Fiori Elements
        "sap.suite.ui.generic.template": {} // Plantillas Fiori Elements (ListReport, ObjectPage)
      }
    },
    "contentDensities": {
      "compact": true,
      "cozy": true // Compatibilidad con distintos modos de densidad (desktop vs touch)
    },
    "models": {
      // Modelo para textos traducibles (i18n)
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "clase4.i18n.i18n"
        }
      },
      // Modelo principal OData
      "": {
        "dataSource": "mainService", // Usa el datasource configurado arriba
        "preload": true,
        "settings": {
          "defaultBindingMode": "TwoWay", // Permite modificar datos desde la UI
          "defaultCountMode": "Inline",
          "refreshAfterChange": false,
          "metadataUrlParams": {
            "sap-value-list": "none" // Desactiva value helps automáticos si no se usan
          }
        }
      },
      // Modelo i18n alternativo (legacy o por compatibilidad)
      "@i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "uri": "i18n/i18n.properties"
      }
    },
    "resources": {
      "css": [] // Aquí se pueden agregar hojas de estilo personalizadas
    },
    "routing": {
      "config": {},
      "routes": [],
      "targets": {}
    }
  },

  "sap.ui.generic.app": {
    "_version": "1.3.0",
    "settings": {
      "forceGlobalRefresh": false,
      "objectPageHeaderType": "Dynamic",
      "considerAnalyticalParameters": true,
      "showDraftToggle": false
    },
    "pages": {
      // Página principal (List Report)
      "ListReport|Products": {
        "entitySet": "Products", // Entidad a listar (desde OData)
        "component": {
          "name": "sap.suite.ui.generic.template.ListReport", // Plantilla de List Report
          "list": true,
          "settings": {
            "condensedTableLayout": true,
            "smartVariantManagement": true, // Permite guardar variantes de filtros/tablas
            "enableTableFilterInPageVariant": true,
            "filterSettings": {
              "dateSettings": {
                "useDateRange": true // Permite usar rangos de fechas en filtros
              }
            },
            "tableSettings": {
              "type": "ResponsiveTable" // Tipo de tabla (adaptable para móviles)
            }
          }
        },
        "pages": {
          // Página de detalle (Object Page)
          "ObjectPage|Products": {
            "entitySet": "Products",
            "defaultLayoutTypeIfExternalNavigation": "MidColumnFullScreen", // Layout usado si se accede directamente a la vista
            "component": {
              "name": "sap.suite.ui.generic.template.ObjectPage"
            }
          }
        }
      }
    }
  },

  "sap.fiori": {
    "registrationIds": [], // (Opcional) Se usa para registrar la app en Launchpad/SAP Work Zone
    "archeType": "transactional" // Tipo de aplicación Fiori (transaccional, analítica, etc.)
  }
}
```
