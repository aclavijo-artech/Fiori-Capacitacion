sap.ui.define([], function () {
  "use strict";
  return {
    formatGitHubName: function (data) {
      // Busca lo que viene después de ".com/" en la URL
      let rMatch = data.match(/\.com\/(.+)$/);

      // Devuelve solo la parte capturada (ej. "usuario/repositorio")
      return rMatch[1];
    },
  };
});
