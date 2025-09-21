sap.ui.define(
  ["ejercicio2/controller/BaseController", "sap/ui/core/HTML"],
  function (BaseController, HTML) {
    "use strict";

    return BaseController.extend("ejercicio2.controller.Training", {
      /**
       * Método que se ejecuta al iniciar el controlador.
       * Aquí se crea un control HTML que contiene un iframe con cursos externos
       * y se agrega al contenedor VBox en la vista.
       */
      onInit: function () {
        // Crear el control HTML para incrustar un iframe con la página de cursos
        const oHtml = new HTML({
          content:
            "<iframe src='https://artech-courses.vercel.app/courses' width='100%' height='700px' frameborder='0'></iframe>",
        });

        // Obtener el VBox con id 'trainingIframe' de la vista para contener el iframe
        const oVBox = this.getView().byId("trainingIframe");

        // Agregar el control HTML (con el iframe) al VBox para mostrar el contenido
        oVBox.addItem(oHtml);
      },
    });
  }
);