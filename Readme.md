> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## Package

```json
{
  "name": "clase3",                      // Nombre del proyecto
  "version": "0.0.1",                   // Versión inicial del proyecto
  "description": "Clase 3",             // Descripción corta del proyecto
  "keywords": [                        // Etiquetas para identificar el proyecto
    "ui5",
    "openui5",
    "sapui5"
  ],
  "main": "webapp/index.html",          // Archivo principal para iniciar la app

  "dependencies": {},                   // Dependencias para producción (vacío aquí)

  "devDependencies": {                  // Dependencias para desarrollo
    "@ui5/cli": "^3.0.0",              // CLI de UI5 para comandos y build
    "@sap/ux-ui5-tooling": "1"         // Herramientas de SAP UX para UI5
  },

  "scripts": {                         // Comandos ejecutables con npm run
    "start": "fiori run --open \"test/flpSandbox.html?sap-ui-xx-viewCache=false#devandywclase3-display\"",
                                        // Ejecuta app en sandbox Fiori con cache deshabilitado y abre navegador
    "start-local": "fiori run --config ./ui5-local.yaml --open \"test/flpSandbox.html?sap-ui-xx-viewCache=false#devandywclase3-display\"",
                                        // Igual que start pero con configuración local UI5 personalizada
    "build": "ui5 build --config=ui5.yaml --clean-dest --dest dist",
                                        // Construye la app para producción, limpia carpeta destino y pone resultado en dist
    "deploy": "fiori verify",           // Verifica y despliega la aplicación (comando de Fiori)
    "deploy-config": "fiori add deploy-config", 
                                        // Agrega configuración para despliegue
    "start-noflp": "fiori run --open \"index.html?sap-ui-xx-viewCache=false\"",
                                        // Inicia la app sin el sandbox FLP (Fiori Launchpad)
    "start-variants-management": "fiori run --open \"preview.html?sap-ui-xx-viewCache=false&fiori-tools-rta-mode=true&sap-ui-rta-skip-flex-validation=true#preview-app\"",
                                        // Ejecuta la app con modo RTA (adaptación en tiempo de ejecución) para variantes
    "unit-tests": "fiori run --open 'test/unit/unitTests.qunit.html'",
                                        // Ejecuta pruebas unitarias QUnit
    "int-tests": "fiori run --open 'test/integration/opaTests.qunit.html'"
                                        // Ejecuta pruebas de integración OPA5
  },

  "sapuxLayer": "CUSTOMER_BASE"        // Capa SAP UX personalizada para esta app
}
```

## Manifest
```json
# Versión del esquema UI5 para este manifest.json
"_version": "1.65.0"

# Metadata general de la aplicación
sap.app:
  # Identificador único de la app
  id: "clase3"

  # Tipo de proyecto: aplicación UI5
  type: "application"

  # Archivo para traducciones (internacionalización)
  i18n: "i18n/i18n.properties"

# Versión de la aplicación
  applicationVersion:
    version: "0.0.1"
  
  # Título y descripción usan claves para textos traducibles
  title: "{{appTitle}}"
  description: "{{appDescription}}"
  
  # Archivo con recursos adicionales
  resources: "resources.json"
  
  # Plantilla base usada para generar esta app
  sourceTemplate:
    id: "@sap/generator-fiori:basic"
    version: "1.16.1"
    toolsId: "28a0febe-27f8-453f-89a6-abc32a7934ab"

# Configuración UI5 general
sap.ui:
  
  # Tecnología usada
  technology: "UI5"
  
  # Íconos para diferentes dispositivos (vacíos aquí)
  icons:
    icon: ""
    favIcon: ""
    phone: ""
    phone@2: ""
    tablet: ""
    tablet@2: ""
  
  # Tipos de dispositivos soportados
  deviceTypes:
    desktop: true
    tablet: true
    phone: true

# Configuración específica de UI5 para esta app
sap.ui5:
  # Deshabilita SAPUI5 flexibility (adaptación en tiempo de ejecución)
  flexEnabled: false

  # Dependencias y versiones mínimas de librerías UI5
  dependencies:
    minUI5Version: "1.139.0"
    libs:
      sap.m: {}          # Librería de controles móviles
      sap.ui.core: {}    # Núcleo UI5

  # Soporte para densidades de contenido (compacta y cómoda)
  contentDensities:
    compact: true
    cozy: true

  # Modelos declarados (para internacionalización)
  models:
    i18n:
      type: "sap.ui.model.resource.ResourceModel"
      settings:
        bundleName: "clase3.i18n.i18n"

  # Recursos CSS adicionales
  resources:
    css:
      - uri: "css/style.css"

  # Configuración de rutas y navegación entre vistas
  routing:
    config:
      # Clase del router para móviles (sap.m.routing.Router)
      routerClass: "sap.m.routing.Router"
      
      # Aggregation del control contenedor donde se insertan las vistas
      controlAggregation: "pages"
      
      # Id del control contenedor (generalmente App)
      controlId: "app"
      
      # Animación en transición entre vistas
      transition: "slide"
      
      # Tipo de navegación: basado en vistas XML
      type: "View"
      viewType: "XML"
      
      # Ruta base para las vistas
      path: "clase3.view"
      
      # Carga asíncrona de vistas
      async: true

    # Definición de rutas URL y targets (vistas a mostrar)
    routes:
      - name: "RouteApp"        # Ruta principal
        pattern: ":?query:"     # URL base sin patrón
        target: ["TargetApp"]   # Vista destino

    # Mapeo de targets a vistas y controles
    targets:
      TargetApp:
        id: "App"
        name: "App"

  # Vista raíz que se carga al iniciar la aplicación
  rootView:
    viewName: "clase3.view.App"
    type: "XML"
    id: "AppRoot"
```
