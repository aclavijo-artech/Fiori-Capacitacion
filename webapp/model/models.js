sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    function (JSONModel, Device) {
        "use strict";

        return {
            /**
             * Provides runtime information for the device the UI5 app is running on as a JSONModel.
             * @returns {sap.ui.model.json.JSONModel} The device model.
             */
            createDeviceModel: function () {
                let oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            createGlobalModel: function () {
                // Datos iniciales para el modelo global
                const oData = {
                    value: "Este es un modelo global",
                    name: "Felipe",
                    lastName: "Rojas"
                }
                
                // Crea un modelo JSON con los datos definidos
                const oModel = new JSONModel(oData);

                // Establece el modo de enlace por defecto a "TwoWay" para que los cambios en la vista se reflejen en el modelo y viceversa
                oModel.setDefaultBindingMode("TwoWay");

                // Devuelve el modelo creado para ser usado globalmente
                return oModel;
            }
        };
    });