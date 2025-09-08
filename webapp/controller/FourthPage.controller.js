sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], function (Controller, JSONModel, Fragment) {
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

        onOpenFragment() {
            // Verifica si el fragmento ya está cargado
            if (!this._oFragment) {
                // Carga el fragmento de forma asíncrona, asignando el controlador actual
                this._oFragment = Fragment.load({
                    name: "clase3.fragments.MyFragment",
                    controller: this
                }).then(function(oFragment){
                    return oFragment;
                });
            }
            // Cuando el fragmento está listo, lo agrega como dependiente de la vista y lo abre
            this._oFragment.then(function(oFragment){
                this.getView().addDependent(oFragment);
                oFragment.open();
            }.bind(this));
        },

        onEditFragment: async function (oEvent) {
            // Espera a que el fragmento esté cargado
            const oFragmentEdit = await this._oFragment;

            // Obtiene el texto del botón que disparó el evento (por ejemplo: "Accept")
            const sButtonText = oEvent.getSource().getText();

            // Si el texto es "Accept", muestra un mensaje de guardado
            if (sButtonText === "Accept") {
                sap.m.MessageToast.show("Guardando información...");
            } 

            // Cierra el fragmento
            oFragmentEdit.close();
        },
    });
});