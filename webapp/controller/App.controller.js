sap.ui.define([
    // Aquí irían los módulos que se necesiten cargar (en este caso no hay dependencias)
], function () {
    // Definición del módulo controlador de UI5

    return sap.ui.core.mvc.Controller.extend("clase2.controller.App", {
        // Extiende el controlador base y lo registra con el nombre "clase2.controller.App"

        onInit: function () {
            // Método que se ejecuta al inicializar el controlador (cuando la vista se carga)
            alert("Hello");
            // Muestra una alerta simple con el texto "Hello"
        },

        onClick: function () {
            // Método que se ejecuta cuando se dispara el evento "press" del botón (por ejemplo)

            sap.m.MessageToast.show(
                // Muestra un mensaje tipo toast (notificación breve)

                this.getView()
                    .getModel("i18n")                  // Obtiene el modelo de recursos i18n con alias "i18n"
                    .getResourceBundle()                // Obtiene el paquete de recursos (bundle) para el idioma actual
                    .getText("name")                   // Obtiene el texto asociado a la clave "name" en i18n

            );
        }
    });
});
