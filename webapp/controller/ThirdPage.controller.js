sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("clase3.controller.ThirdPage", {       
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteThirdPage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            // Obtiene el parámetro "param" directamente desde los argumentos de la ruta
            const sParam = oEvent.getParameter("arguments").param;

            // Actualiza el control Text con id "thirdPageTextParam" mostrando el valor del parámetro recibido
            this.getView().byId("thirdPageTextParam")
                .setText(`Parámetro: ${sParam}`);

            // Guarda el parámetro en una propiedad del controlador para usarlo más adelante
            this.sParam = sParam;
        },

        // Función que navega a la cuarta página, pasando el parámetro almacenado
        onToFourthPage() { 
            // Obtiene el enrutador del componente principal
            const oRouter = this.getOwnerComponent().getRouter();
            
            // Navega a la ruta "RouteFourthPage" pasando el parámetro guardado
            oRouter.navTo("RouteFourthPage", {
                param: this.sParam
            });
        }
    });
});