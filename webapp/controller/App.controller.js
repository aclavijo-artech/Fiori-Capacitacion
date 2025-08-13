sap.ui.define([
    "sap/ui/core/mvc/Controller",     // Clase base para los controladores en SAPUI5
    "sap/m/MessageToast"              // Control para mostrar notificaciones breves (tipo toast)
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ejercicio1.controller.App", {
        // Define un controlador llamado "ejercicio1.controller.App"

        onInit: function () {
            // Método que se ejecuta al inicializar el controlador (cuando la vista se carga)
        },

        onClick: function () {
            // Método que se ejecuta cuando ocurre el evento de click (ej. presionar un botón)

            let sName = prompt(this._onResourceBundle("howName"));
            // Muestra un prompt al usuario con el texto localizado "howName" (ej. "¿Cómo te llamas?")
            // El usuario escribe su nombre y se guarda en sName

            if (sName)
                MessageToast.show(this._onResourceBundle("name", sName));
            // Si el usuario escribió algo, se muestra un MessageToast con el texto traducido "name", usando sName como parámetro
        },

        _onResourceBundle: function (key, prop) {
            // Función interna para obtener textos traducidos desde el modelo i18n
            return this.getView()
                .getModel("i18n")                      // Obtiene el modelo de internacionalización
                .getResourceBundle()                   // Obtiene el recurso de traducciones (bundle)
                .getText(key, prop || null);           // Devuelve el texto correspondiente a la clave, con parámetro opcional
        }
    })
});
