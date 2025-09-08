sap.ui.define([
], function () {
    "use strict";
    return {
        formatName(data) {
            if (data.trim() === "Felipe") return `Es ${data}`;
            if (data.trim() !== "") return data;
        }
    }
})