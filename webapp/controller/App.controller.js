// Define el módulo del controlador utilizando el sistema de módulos AMD de SAPUI5
sap.ui.define([
    "sap/ui/core/mvc/Controller" // Importa la clase base Controller desde SAPUI5
], function (Controller) {
    "use strict"; // Modo estricto de JavaScript para evitar errores comunes

    // Devuelve una clase que extiende el controlador base de SAPUI5
    return Controller.extend("clase3.controller.App", { // Ruta del controlador (debe coincidir con la usada en la vista)

        // Método que se ejecuta automáticamente al iniciar el controlador
        onInit() {
            // Aquí puedes poner lógica de inicialización como cargar datos, configurar modelos, etc.
        }

    });
});
