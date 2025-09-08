sap.ui.define([
], function () {
  "use strict";

  return {
    // Función que formatea el nombre recibido como parámetro
    formatName(data) {
      // Si el nombre (eliminando espacios) es exactamente "Felipe"
      if (data.trim() === "Felipe") {
        // Devuelve el texto formateado: "Es Felipe"
        return `Es ${data}`;
      }

      // Si el campo no está vacío (después de quitar espacios), devuelve el valor tal cual
      if (data.trim() !== "") {
        return data;
      }

      // Si está vacío, no devuelve nada (undefined)
    },
  };
});
