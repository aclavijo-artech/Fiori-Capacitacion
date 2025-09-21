sap.ui.define(
  [
    "ejercicio2/controller/BaseController", // Importa el controlador base (donde están utilidades comunes)
    "ejercicio2/model/formatter", // Importa el formatter (formateadores personalizados)
  ],
  (BaseController, formatter) => {
    "use strict";

    // Define y extiende el controlador principal de la vista "App"
    return BaseController.extend("ejercicio2.controller.App", {
      // Asigna los formatters para usarlos directamente en la vista (bindings con formato)
      formatter: formatter,

      /**
       * Función que se ejecuta automáticamente al iniciar el controlador
       */
      onInit() {},

      /**
       * Evento que se ejecuta al presionar el botón de editar perfil
       * Carga y abre el fragmento de edición de perfil
       */
      onEditProfile: function () {
        this.createAndOpenFragment("_oFragamentEditProfile", "EditProfile");
      },

      /**
       * Evento que se ejecuta al presionar "Guardar" o "Cancelar" en el fragmento de edición
       * @param {sap.ui.base.Event} oEvent - Evento que contiene el botón presionado
       */
      onEditProfileData: async function (oEvent) {
        const oFragmentEdit = await this._oFragamentEditProfile;
        const sButtonText = oEvent.getSource().getText();

        if (sButtonText === "Guardar") {
          sap.m.MessageToast.show("Guardando información...");
        }

        oFragmentEdit.close();
      },

      /**
       * Maneja el evento de clic en las imágenes (GitHub o LinkedIn)
       * Redirige al enlace correspondiente según el ID del control
       */
      onLinkImage: function () {
        const oData = this.getModel("profile").getData();

        if (this.getId("appImageGitHub")) {
          sap.m.URLHelper.redirect(oData["github"], true);
        }

        if (this.getId("appImageLinkedin")) {
          sap.m.URLHelper.redirect("https://www.linkedin.com/in/", true);
        }
      },

      /**
       * Navega a la vista de cursos/capacitación usando el router
       */
      goToTraining: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteTraining");
      },

      /**
       * Abre el fragmento que contiene el selector de empresas (dropdown)
       */
      goToJob: function () {
        this.createAndOpenFragment("_oFragamentCompanies", "Companies");
      },

      /**
       * Evento que se dispara al presionar "Ir a Empresa" dentro del fragmento
       * Navega a la vista Job con el parámetro de empresa seleccionada
       */
      goToSelectedJob: function (oEvent) {
        const oSelect = this.getId("selectCompany");
        const sCompany = oSelect.getSelectedKey();
        const sButtonText = oEvent.getSource().getText();

        if (!sCompany)
          return sap.m.MessageToast.show("Por favor selecciona una empresa.");


        if (sButtonText === "Cancelar") {
          return this._oFragamentCompanies.close();
        }

        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteJob", {
          company: sCompany,
        });
      },
    });
  }
);
