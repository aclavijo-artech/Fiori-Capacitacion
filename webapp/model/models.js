// Definición del módulo con sap.ui.define (AMD)
// Se importan dos módulos: JSONModel y Device
sap.ui.define([
    "sap/ui/model/json/JSONModel", // Modelo de datos en formato JSON
    "sap/ui/Device"                // Proporciona información sobre el dispositivo (tipo, pantalla, etc.)
], function (JSONModel, Device) {
    "use strict"; // Activa el modo estricto de JavaScript

    // Se exporta un objeto con una función: createDeviceModel
    return {

        /**
         * Crea un modelo JSON que contiene información sobre el dispositivo en el que se está ejecutando la app.
         * Este modelo se puede usar en la vista para adaptar el comportamiento/responsividad.
         * @returns {sap.ui.model.json.JSONModel} El modelo del dispositivo.
         */
        createDeviceModel: function () {
            let oModel = new JSONModel(Device); // Se crea el modelo JSON a partir del objeto Device
            oModel.setDefaultBindingMode("OneWay"); // Solo lectura: las vistas pueden leer pero no modificar el modelo
            return oModel; // Se devuelve el modelo
        }
    };
});
