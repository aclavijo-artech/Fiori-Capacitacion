// webapp/ext/ListReportExt.controller.js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/table/Table"
], function (Controller, UiTable) {
  "use strict";

  // Umbrales
  var THRESHOLDS = { greenMax: 8000, yellowMax: 10000 };

  function parseNumber(s) {
    if (!s) return NaN;
    s = String(s);
    var t = s.replace(/[^\d.,-]/g, "").trim();
    if (!t) return NaN;
    var lastComma = t.lastIndexOf(",");
    var lastDot   = t.lastIndexOf(".");
    var decSep = (lastComma > lastDot) ? "," : ".";
    var grpSep = (decSep === ",") ? "." : ",";
    t = t.split(grpSep).join("");
    if (decSep === ",") t = t.replace(",", ".");
    return parseFloat(t);
  }

  function classFor(v) {
    if (isNaN(v)) return "";
    if (v <= THRESHOLDS.greenMax)  return "tpf-green";
    if (v <= THRESHOLDS.yellowMax) return "tpf-yellow";
    return "tpf-red";
  }

  function findTotalColumnIndex(oTable) {
    var aCols = oTable.getColumns();
    var idx = -1;
    aCols.forEach(function (col, i) {
      var lbl = col.getLabel && col.getLabel();
      var txt = lbl && lbl.getText ? lbl.getText().trim().toLowerCase() : "";
      if (txt === "total" || txt.indexOf("semáforo") >= 0 || txt.indexOf("semaforo") >= 0) idx = i;

      // fallback por binding si el label cambia
      var tmpl = col.getTemplate && col.getTemplate();
      if (tmpl && tmpl.getBinding("text") && tmpl.getBinding("text").getPath() === "TOTAL") idx = i;
      if (tmpl && tmpl.getBinding("number") && tmpl.getBinding("number").getPath() === "TOTAL") idx = i;
    });
    return idx;
  }

  function paint(oTable, iTotal) {
    if (iTotal < 0) return;

    var aCols = oTable.getColumns();
    if (aCols[iTotal]) aCols[iTotal].addStyleClass("tpf-total-col");

    oTable.getRows().forEach(function (oRow) {
      var aCells = oRow.getCells && oRow.getCells();
      if (!aCells || !aCells[iTotal]) return;

      var oCell = aCells[iTotal];
      oCell.addStyleClass("tpf-total-cell");

      var text = "";
      if (oCell.getText)       { text = oCell.getText(); }
      else if (oCell.getNumber){ text = oCell.getNumber(); }
      else if (oCell.getValue) { text = oCell.getValue(); }

      var val = parseNumber(text);
      var cls = classFor(val);
      oCell.removeStyleClass("tpf-green tpf-yellow tpf-red");
      if (cls) oCell.addStyleClass(cls);
    });
  }

  return Controller.extend("com.edu.tpfinalfe.ext.ListReportExt", {
    // UI5 llama este hook antes del rebind; SmartTable existe pero la tabla
    // puede no estar lista aún. Aseguramos inicialización.
    onBeforeRebindTableExtension: function (oEvent) {
      var oSmartTable = oEvent.getSource();
      var ensure = function () {
        var oTable = oSmartTable.getTable();
        if (!oTable || !(oTable instanceof UiTable)) { return; }

        var idx = findTotalColumnIndex(oTable);

        // pinto al primer render y cada actualización visible
        var fn = function () { paint(oTable, idx); };
        oTable.detachRowsUpdated(fn); // evita múltiples suscripciones
        oTable.attachRowsUpdated(fn);
        // si ya hay filas visibles, pintar ya
        fn();
      };

      // si ya está inicializado, adelante; si no, esperar al evento initialise
      if (oSmartTable.getUseVariantManagement && oSmartTable.getUseVariantManagement() !== undefined) {
        ensure();
      } else if (oSmartTable.attachInitialise) {
        oSmartTable.attachInitialise(ensure);
      } else {
        // fallback asincrónico
        setTimeout(ensure, 0);
      }
    }
  });
});
