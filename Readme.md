> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## Manifest

```json
"extends": {
  "extensions": {
    "sap.ui.controllerExtensions": {
      // Extensión del controlador estándar ListReport de Fiori Elements
      "sap.suite.ui.generic.template.ListReport.view.ListReport": {
        // Nombre del controlador custom que extiende el controlador estándar
        "controllerName": "clase4.ext.controller.ListReportExt",

        // Configuración personalizada específica para la app genérica SAP Fiori
        // Aquí definís acciones para el EntitySet 'DisputeSet' (que en este caso es 'Products')
        "sap.ui.generic.app": {
          "Product": {
            "EntitySet": "Products",       // Entidad OData a la que se aplica esta configuración
            "Actions": {
              // Acción personalizada definida para el ListReport
              "IdEdit": {
                "id": "IdButton",          // ID único para el botón/acción
                "text": "{i18n>buttonUpload}", // Texto del botón, traído desde el archivo i18n
                "press": ".onOpenButton",  // Método del controlador que se ejecuta al presionar el botón
                "requiresSelection": false // Indica que la acción no requiere selección previa en la tabla
              }
            }
          }
        }
      }
    }
  }
}
```

```json
// Configuración del Flexible Column Layout (FCL)
"flexibleColumnLayout": {
  // Layout por defecto cuando hay dos columnas: 
  // la columna izquierda inicia expandida (más ancha)
  "defaultTwoColumnLayoutType": "TwoColumnsBeginExpanded",
  
  // Layout por defecto cuando hay tres columnas:
  // la columna derecha (última) inicia expandida (más ancha)
  "defaultThreeColumnLayoutType": "ThreeColumnsEndExpanded"
}
```
