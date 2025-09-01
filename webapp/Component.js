sap.ui.define([
    "sap/ui/core/UIComponent",
    "clase3/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("clase3.Component", {
        metadata: {
            manifest: "json",  // Indica que la configuración del componente se encuentra en el archivo manifest.json
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"  // Permite la creación asíncrona del contenido del componente para optimizar el rendimiento
            ]
        },

        init() {
            // Llama al init original de UIComponent para asegurar que se inicialice correctamente toda la funcionalidad base
            UIComponent.prototype.init.apply(this, arguments);

            // Crea y asigna el modelo de dispositivo (info de pantalla, sistema, etc.) para usar en la app
            this.setModel(models.createDeviceModel(), "device");

            // Inicializa el router para habilitar la navegación entre vistas definidas en el manifest.json
            this.getRouter().initialize();
        }
    });
});
