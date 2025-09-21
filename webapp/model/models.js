sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (JSONModel, Device) {
    "use strict";

    // Exporta un objeto con múltiples funciones para crear modelos
    return {
      /**
       * Crea un modelo JSON basado en las propiedades del dispositivo (móvil, tablet, desktop, etc.)
       * Se usa para hacer que la UI se adapte automáticamente al tipo de dispositivo.
       * @returns {sap.ui.model.json.JSONModel} El modelo de dispositivo.
       */
      createDeviceModel() {
        let oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },

      /**
       * Crea un modelo JSON con la información del perfil del usuario
       * Este modelo usa binding bidireccional (TwoWay) para que los cambios en la vista afecten al modelo
       * @returns {sap.ui.model.json.JSONModel} El modelo del perfil
       */
      createProfileModel() {
        let oData = {
          name: "Andrés",
          lastName: "Clavijo",
          birthDate: "22/08/2000",
          email: "aclavijo@artech-consulting.com",
          github: "https://github.com/aclavijo-artech",
          company: "Artech",
          role: "Fiori Developer",
          photo: "https://avatars.githubusercontent.com/u/192107407?v=4",
        };

        let oModel = new JSONModel(oData);
        oModel.setDefaultBindingMode("TwoWay"); 
        return oModel;
      },

      /**
       * Crea un modelo JSON con una lista de empresas
       * @returns {sap.ui.model.json.JSONModel} El modelo de empresas
       */
      createCompaniesModel() {
        let oData = {
          company: [
            { key: "Artech", name: "Artech", url: "https://artalk.tech/" },
          ]
        };

        let oModel = new JSONModel(oData);
        oModel.setDefaultBindingMode("TwoWay");
        return oModel;
      },
    };
  }
);
