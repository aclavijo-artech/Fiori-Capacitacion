sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("clase3.controller.FourthPage", {       
        onInit() {
            const oData = {
                value: "Este es un modelo local",
                name: "Andrés",
                lastName: "Clavijo"
            }

            this.getView().setModel(new JSONModel(oData), "localModel");
            this.getView().byId("fourthPageTitle").setText("Modelo Local");
            this.getView().byId("fourthPageTitleGlobal").setText("Modelo Global");
        },
    });
});