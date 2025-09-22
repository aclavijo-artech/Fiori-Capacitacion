sap.ui.define(["sap/ui/core/Fragment"], (Fragment) => {
  "use strict";

  return {
    // Método onInit, se ejecuta cuando se inicializa el controlador (vacío por ahora)
    onInit() {},

    // Función que se ejecuta cuando se presiona el botón para abrir el fragmento
    onOpenButton() {
      // Si el fragmento ya fue creado y guardado en esta variable, solo lo abre
      if (this._oTestFragment) return this._oTestFragment.open();

      // Si no existe, carga el fragmento de manera asíncrona
      Fragment.load({
        id: this.getView().getId(), // ID único basado en la vista para el fragmento
        name: "clase4.ext.fragments.Test", // Ruta del fragmento XML que se quiere cargar
        controller: this, // El controlador actual maneja los eventos del fragmento
      }).then(
        function (oUploadFragment) {
          this._oTestFragment = oUploadFragment; // Guarda el fragmento para usarlo luego
          this.getView().addDependent(this._oTestFragment); // Añade el fragmento como dependiente para gestión de ciclo de vida
          this._oTestFragment.open(); // Finalmente, abre el diálogo/fragmento
        }.bind(this) // Asegura que el contexto de 'this' dentro del callback sea el controlador
      );
    },

    // Función para cerrar el fragmento, llamada desde el fragmento mismo (ej. botón cerrar)
    onClose() {
      this._oTestFragment.close();
    },
  };
});
