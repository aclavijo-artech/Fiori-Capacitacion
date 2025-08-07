sap.ui.define([
], function () {
    return sap.ui.core.mvc.Controller.extend("test.controller.App", {
        onInit: function () {
            alert("Hello")
        },

        onClick: function () {
            sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("name"));
        }
    })
});