sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"], // Importa el Controller base de SAPUI5 y el módulo Fragment
  (Controller, Fragment) => {
    "use strict";

    // Define un nuevo controlador llamado "Base", que puede ser extendido por otros controladores
    return Controller.extend("ejercicio2.controller.Base", {
      /**
       * Devuelve un control dentro de la vista actual por su ID
       * @param {string} sId - ID del control
       * @returns {sap.ui.core.Control}
       */
      getId(sId) {
        return this.getView().byId(sId);
      },

      /**
       * Obtiene un modelo de la vista actual
       * @param {string} sModel - Nombre del modelo
       * @returns {sap.ui.model.Model}
       */
      getModel(sModel) {
        return this.getView().getModel(sModel);
      },

      /**
       * Carga y abre un fragmento solo si no ha sido cargado antes.
       * Evita duplicados, y lo asocia como dependiente de la vista.
       *
       * @param {string} name - Nombre de la propiedad en `this` donde se guarda el fragmento
       * @param {string} file - Nombre del archivo de fragmento (sin la ruta completa)
       */
      async createAndOpenFragment(name, file) {
        const oView = this.getView();

        // Carga el fragmento solo si no está en caché
        if (!this[name]) {
          this[name] = await Fragment.load({
            id: oView.getId(), // Usa el ID de la vista para evitar conflictos de nombres
            name: `ejercicio2.fragments.${file}`, // Ruta completa del fragmento
            controller: this, // Asigna este controlador al fragmento
          });

          // Añade el fragmento como dependiente de la vista (buena práctica para gestión de ciclo de vida)
          oView.addDependent(this[name]);
        }

        // Abre el fragmento (por ejemplo, un Dialog)
        this[name].open();
      },
    });
  }
);