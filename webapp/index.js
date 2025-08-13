sap.ui.define([
], function () {
    "use strict";
    jQuery.sap.includeStyleSheet("css/style.css");
    // sap.ui.dom.includeStylesheet.includeStylesheet("css/style.css"); // versiones superiores a 1.90 y solamente funciona importando la libreria primero

    sap.ui.core.mvc.XMLView.create({ viewName: "clase2.view.App" })
        .then((oView) => {
            oView.setModel(new sap.ui.model.resource.ResourceModel({ bundleName: "clase2.i18n.i18n" }), "i18n");
            // Ruta al archivo de propiedades de internacionalización (i18n)
            // Asigna el modelo con el alias "i18n" para usarlo en la vista
            oView.placeAt("content");
        });
});