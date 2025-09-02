sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("clase3.controller.ThirdPage", {       
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteThirdPage").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            const sParam = oEvent.getParameter("arguments").param;

            this.getView().byId("thirdPageTextParam").setText(`Parámetro: ${sParam}`);
            this.sParam = sParam;
        },

        ontoFourthPage() {
            const oRouter = this.getOwnerComponent().getRouter();
            
            oRouter.navTo("RouteFourthPage", {
                param: this.sParam
            });
        }
    });
});