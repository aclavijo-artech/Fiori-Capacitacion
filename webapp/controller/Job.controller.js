sap.ui.define(
  ["ejercicio2/controller/BaseController", "sap/ui/core/HTML"],
  /**
   * Controlador para la vista Job.
   * Maneja la lógica relacionada con la ruta y el iframe del job.
   */
  function (BaseController, HTML) {
    return BaseController.extend("ejercicio2.controller.Job", {
      /**
       * Método que se ejecuta al iniciar el controlador.
       * Aquí se suscribe al evento de la ruta 'RouteJob' para manejar la navegación.
       */
      onInit: function () {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("RouteJob")
          .attachPatternMatched(this._onRouteMatched, this);
      },

      /**
       * Manejador del evento 'patternMatched' de la ruta.
       * Se ejecuta cuando la ruta 'RouteJob' es activada.
       *
       * @param {sap.ui.base.Event} oEvent - Evento de la ruta.
       */
      _onRouteMatched: function (oEvent) {
        // Obtener el parámetro 'company' pasado en la ruta
        const sCompanyId = oEvent.getParameter("arguments")["company"];

        // Obtener el panel identificado como 'jobText' de la vista
        const oPanel = this.getView().byId("jobText");

        // Establecer el texto del encabezado del panel con el id de la compañía
        oPanel.setHeaderText(sCompanyId);

        // Crear un control HTML para insertar un iframe que muestra contenido externo
        const oHtml = new HTML({
          content:
            "<iframe src='https://artalk.tech/' width='100%' height='700px' frameborder='0'></iframe>",
        });

        // Obtener el VBox donde se mostrará el iframe
        const oVBox = this.getView().byId("jobIframe");

        // Agregar el control HTML con el iframe al VBox para visualizarlo
        oVBox.addItem(oHtml);
      },
    });
  }
);