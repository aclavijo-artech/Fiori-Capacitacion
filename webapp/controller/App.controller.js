sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("clase3.controller.App", {       
        onInit() {
        },
        
        onToSecondPage() {
            const oRouter = this.getOwnerComponent().getRouter();
            
            oRouter.navTo("RouteSecondPage");
        },

        onToThirdPage() {
        // Obtiene el enrutador del componente principal
        const oRouter = this.getOwnerComponent().getRouter();
        
        // Navega a la ruta "RouteThirdPage" pasando el parámetro dinámico "param" con valor "12345"
        oRouter.navTo("RouteThirdPage", {
            param: "12345"
        });
        }
    });
});