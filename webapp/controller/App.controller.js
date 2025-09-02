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
        }
    });
});