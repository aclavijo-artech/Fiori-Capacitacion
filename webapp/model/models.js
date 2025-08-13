sap.ui.define([
    "sap/ui/model/json/JSONModel",    // Modelo de datos en formato JSON
], function (JSONModel) {
    "use strict";

    return {
        createTableModel: function () {
            let oModel = [];
            // Crea un arreglo vacío para almacenar productos

            const refactor = (id, nombre, precio, stock) => {
                // Función de utilidad que recibe datos y devuelve un objeto con propiedades
                return { id, nombre, precio, stock };
            }

            // Agrega productos al arreglo oModel usando la función refactor
            oModel.push(refactor(101, "Laptop", 1200, 5));
            oModel.push(refactor(102, "Mouse", 25, 30));
            oModel.push(refactor(103, "Teclado", 45, 20));
            oModel.push(refactor(104, "Monitor", 300, 8));
            oModel.push(refactor(105, "USB", 15, 100));
            oModel.push(refactor(106, "Auriculares", 75, 15));

            return new JSONModel(oModel); // Crea un modelo JSON con los datos
        }
    }
})