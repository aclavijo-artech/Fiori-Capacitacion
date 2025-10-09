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
            oModel.setProperty("/iPage", "1");
            this.getView().setModel(oModel, "local");
            this._iPage = 1;
            this._iPageSize = 100;
            this.getView().byId("idSig").setEnabled(false);
        },

         onSearch: function (iPage) {
            debugger;
            var oView = this.getView();
            var oODataModel = oView.getModel("Z_TRABAJOFINAL_FIORI_SRV");
            var oLocalModel = oView.getModel("local");
            var sEbeln = oView.byId("idEbeln").getValue();
            var sAedat = oView.byId("idAedat").getValue();
            var sLifnr = oView.byId("idLifnr").getValue();
            // var dAedat = oLocalModel.getProperty("/dAedat");
            const iSkip = (iPage - 1) * this._iPageSize;
            
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
                urlParameters: {
                "$top": this._iPageSize,
                "$skip": iSkip,
                "$format": "json"
                },
                success: function (oData) {
                  // Cargar resultados en modelo local

                    oData.results.forEach((reg, idx, arr) => {
                        arr[idx].AEDAT.setHours(0, 0, 0, 0);
                        }                
                    );       
                  oLocalModel.setProperty("/results", oData.results);
                    
                    // oData.results.forEach(reg => {
                    // reg.aedat.setHours(0, 0, 0, 0); // Pone hora, minutos, segundos y milisegundos en 0
                    // });
                  if (oData.results.length === 0) {
                        var aiPage = oLocalModel.getProperty("/iPage");
                        aiPage--;
                        oLocalModel.setProperty("/iPage", aiPage);
                   }
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
         },

        onNextPage: function () {
        var oView = this.getView();

        var oModel = oView.getModel("local");
        this._iPage++;
        oModel.setProperty("/iPage", this._iPage);
        this.onSearch(this._iPage);

        },

        onPrevPage: function () {
        var oView = this.getView();
        var oModel = oView.getModel("local");
        var aiPage = oModel.getProperty("/iPage");
        var oiPage = aiPage;

        if (this._iPage > 1) {
            this._iPage--;
            if (oiPage) {
                oModel.setProperty("/iPage", this._iPage);
            }
            this.onSearch(this._iPage);
        }
        },
        _onDateChange: function (oEvent) {
            const sAedat = oEvent.getSource().getValue();
            const oAedat = new Date(sAedat + "T00:00:00"); 
            var oView = this.getView();
            var oModel = oView.getModel("local");
            var dAedat = oAedat.getDate();
            var dAedatDay = oAedat.getDay();
            var dAedatMonth = oAedat.getMonth();
            var dAedatYear = oAedat.getFullYear();
            const dsAedat = new Date(dAedatDay, dAedatMonth, dAedatYear); 
            oModel.setProperty("/dAedat", oAedat);

        }
    });
});