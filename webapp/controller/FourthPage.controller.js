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
            if (!this._oFragment) {
                this._oFragment = Fragment.load({
                    name: "clase3.fragments.MyFragment",
                    controller: this
                }).then(function(oFragment){
                    return oFragment;
                });
            }
            this._oFragment.then(function(oFragment){
                this.getView().addDependent(oFragment);
                oFragment.open();
            }.bind(this));
        },

        onEditFragment: async function (oEvent) {
            const oFragmentEdit = await this._oFragment;
            const sButtonText = oEvent.getSource().getText();

            if (sButtonText === "Accept") {
                sap.m.MessageToast.show("Guardando información...");
            } 

            
            oFragmentEdit.close();
        },
    });
});