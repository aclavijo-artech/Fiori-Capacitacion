sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("clase3.controller.App", {
    onInit() {
    },

    onToSecondPage() {
      // Obtiene el enrutador del componente principal
      const oRouter = this.getOwnerComponent().getRouter();

      // Navega a la ruta llamada "RouteSecondPage"
      oRouter.navTo("RouteSecondPage");
    },
  });
});
