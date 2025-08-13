sap.ui.define([
], function () {
    "use strict";
    jQuery.sap.includeStyleSheet("css/style.css");
    // Esta línea incluye una hoja de estilo CSS externa (ubicada en "webapp/css/style.css").
    // Este método es compatible con versiones más antiguas de SAPUI5 (< 1.90).
    // IMPORTANTE: jQuery.sap.* está obsoleto en versiones recientes de UI5.

    // Alternativa moderna (>= 1.90) — si se desea usar:
    // sap.ui.dom.includeStylesheet("css/style.css");
    // Requiere importar el módulo "sap/ui/dom/includeStylesheet" previamente con sap.ui.define.

    sap.ui.core.mvc.XMLView.create({ viewName: "test.view.App" })
        .then((oView) => oView.placeAt("content"));
    // Crea una vista XML (tipo XMLView) de forma asíncrona.
    // 'viewName' debe coincidir con la ruta de la vista sin extensión .xml (es decir, webapp/view/App.view.xml).
    // Una vez creada, se coloca dentro del elemento HTML con id "content".
});