sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("clase3.controller.ThirdPage", {       
        onInit() {
            // Obtiene el enrutador y se suscribe al evento cuando la ruta "RouteThirdPage" es activada
            this.getOwnerComponent().getRouter()
                .getRoute("RouteThirdPage")
                .attachPatternMatched(this._onRouteMatched, this);
        },

        // Función que se ejecuta cuando la ruta coincide con el patrón (se navega a ThirdPage/{param})
        _onRouteMatched(oEvent) {
            // Obtiene los argumentos (parámetros) de la ruta
            const sParam = oEvent.getParameter("arguments");

            // Actualiza el control Text con id "thirdPageTextParam" mostrando el valor del parámetro recibido
            this.getView().byId("thirdPageTextParam")
                .setText(`Parámetro: ${sParam["param"]}`);
        }
    });
});