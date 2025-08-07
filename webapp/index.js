sap.ui.define([
], function () {
    "use strict";
    jQuery.sap.includeStyleSheet("css/style.css");
    // sap.ui.dom.includeStylesheet.includeStylesheet("css/style.css"); // versiones superiores a 1.90 y solamente funciona importando la libreria primero

    sap.ui.core.mvc.XMLView.create({ viewName: "test.view.App" })
        .then((oView) => oView.placeAt("content"));
});