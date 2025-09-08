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
                const oData = {
                    value: "Este es un modelo global",
                    name: "Felipe",
                    lastName: "Rojas"
                }
                
                const oModel = new JSONModel(oData);

                oModel.setDefaultBindingMode("TwoWay");

                return oModel;
            }
        };
    });