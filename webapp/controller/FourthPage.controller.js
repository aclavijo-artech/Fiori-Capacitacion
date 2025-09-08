sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("clase3.controller.FourthPage", {       
        onInit() {
            // Datos locales que se usarán en el modelo JSON
            const oData = {
                name: "Andrés",
                lastName: "Clavijo"
            }

            // Crea un modelo JSON con los datos locales y lo asigna a la vista con el nombre "localModel"
            this.getView().setModel(new JSONModel(oData), "localModel");

            // Actualiza el control Text con id "fourthPageTitle" para mostrar el texto "Modelo Local"
            this.getView().byId("fourthPageTitle").setText("Modelo Local");
        },
    });
});