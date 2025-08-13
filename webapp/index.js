sap.ui.define([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel",
    "ejercicio1/model/models",
    "sap/ui/dom/includeStylesheet"
], async function (XMLView, ResourceModel, models, includeStylesheet) {
    "use strict";

    includeStylesheet("css/style.css");
    

    const i18nModel = new ResourceModel({ bundleName: "ejercicio1.i18n.i18n" });
    const oView = await XMLView.create({ viewName: "ejercicio1.view.App" });

    oView.setModel(models.createTableModel(), "oModel"); // Captura el json model y lo asigna a la vista con el nombre "oModel"
    oView.setModel(i18nModel, "i18n");
    oView.placeAt("content");
});