sap.ui.define([
    // Aquí irían los nombres de los módulos que necesitas cargar como dependencias.
    // En este caso está vacío porque solo usas 'sap.m.Title' que está disponible globalmente.
], function () {
    "use strict";
    // Modo estricto de JavaScript para evitar errores comunes y mejorar la seguridad.

    new sap.m.Title({
        text: "Hello World"  // Crea un nuevo control sap.m.Title con el texto "Hello World".
    }).placeAt("content");
    // Coloca el control recién creado en el DOM dentro del elemento con id "content".
    // Esto renderiza el título en la página dentro del <body id="content">.
});
