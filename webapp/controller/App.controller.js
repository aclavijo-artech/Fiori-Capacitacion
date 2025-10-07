sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("tpcurso.controller.App", {
        onInit() {
            // Crear un modelo local para los resultados
            var oModel = new JSONModel();
            this.getView().setModel(oModel, "local");
        },

         onSearch: function () {
            debugger;
            var oView = this.getView();
            var oODataModel = oView.getModel("Z_TRABAJOFINAL_FIORI_SRV");
            var oLocalModel = oView.getModel("local");
            var sEbeln = oView.byId("idEbeln").getValue();
            var sAedat = oView.byId("idAedat").getValue();
            var sLifnr = oView.byId("idLifnr").getValue();

            var aFilters = [];

            if (sEbeln) {
                aFilters.push(new Filter("EBELN", FilterOperator.EQ, sEbeln)); }
            if (sAedat) {
                aFilters.push(new Filter("AEDAT", FilterOperator.EQ, sAedat)); }
            if (sLifnr) {
                aFilters.push(new Filter("LIFNR", FilterOperator.EQ, sLifnr)); }
            // Invocar servicio OData 
            oODataModel.read("/ordenescompraSet", {
                filters: aFilters,
                success: function (oData) {
                  // Cargar resultados en modelo local
                  oLocalModel.setProperty("/results", oData.results);
                    },
                    error: function (oError) {
                    sap.m.MessageToast.show("Error al obtener datos");
                    }
                });

                      // Enlazar tabla al modelo local
                var oTable = oView.byId("idTable");
                oTable.setModel(oLocalModel);
                oTable.bindItems({
                        path: "local>/results",
                        template: oTable.getBindingInfo("items").template
                    });
         }
    });
});