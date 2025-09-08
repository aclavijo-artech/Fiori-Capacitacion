sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    // Importa el archivo de formateadores personalizados (formatter.js)
    "clase3/model/formatter",
    // Importa la clase MessageBox de SAPUI5 para mostrar mensajes modales
    "sap/m/MessageBox",
], function (Controller, JSONModel, Fragment, formatter, MessageBox) {
    "use strict";

    return Controller.extend("clase3.controller.FourthPage", {     
        // Asigna el objeto 'formatter' para poder usar sus funciones en la vista (por ejemplo, en bindings con formatter)
        formatter: formatter,

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

            if (sButtonText === "Save") {
                // Verifica si el campo de entrada está vacío (sin espacios)
                if (oFragmentEdit.getContent()[0].getItems()[0].getValue().trim() === "") {
                    // Muestra una advertencia si el campo está vacío y sale de la función
                    return MessageBox.warning("Es un campo vacío");
                }

                // Si el campo tiene contenido, actualiza el valor "name" en el modelo global
                this.getView().getModel("globalModel").setProperty(
                    "/name", 
                    oFragmentEdit.getContent()[0].getItems()[0].getValue()
                );

                // Muestra una notificación indicando que la información se está guardando
                sap.m.MessageToast.show("Guardando información...");
            }
            
            oFragmentEdit.close();
        },
    });
});