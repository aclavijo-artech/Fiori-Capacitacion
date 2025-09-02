sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("clase3.controller.ThirdPage", {       
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteThirdPage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            const sParam = oEvent.getParameter("arguments");

            this.getView().byId("thirdPageTextParam").setText(`Parámetro: ${sParam["param"]}`);
        }
    });
});