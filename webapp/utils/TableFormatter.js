(function () {
  "use strict";

  const THRESHOLDS = { greenMax: 8000, yellowMax: 10000 };

  function parseNumber(text) {
    let t = (text || "").replace(/[^\d.,-]/g, "").trim();
    if (!t) return NaN;
    const lastComma = t.lastIndexOf(",");
    const lastDot = t.lastIndexOf(".");
    const decSep = (lastComma > lastDot) ? "," : ".";
    const grpSep = (decSep === ",") ? "." : ",";
    t = t.split(grpSep).join("");
    if (decSep === ",") t = t.replace(",", ".");
    return parseFloat(t);
  }

  function colorFor(value) {
    if (isNaN(value)) return { icon: "", color: "" };
    if (value <= THRESHOLDS.greenMax)  return { icon: "🟢", color: "#107E3E" };
    if (value <= THRESHOLDS.yellowMax) return { icon: "🟡", color: "#E9730C" };
    return { icon: "🔴", color: "#BB0000" };
  }

  function findTotalColumnIndex(table) {
    const cols = table.querySelectorAll(".sapUiTableCol");
    let idx = -1;
    cols.forEach((col, i) => {
      const label = col.querySelector(".sapMLabel");
      const text = (label ? label.textContent : col.textContent || "").trim().toLowerCase();
      if (text === "total" || text.includes("semáforo")) idx = i;
    });
    return idx;
  }

  function formatGridTable(table) {
    const totalIdx = findTotalColumnIndex(table);
    if (totalIdx < 0) return;

    const headers = table.querySelectorAll(".sapUiTableCol");
    if (headers[totalIdx]) headers[totalIdx].style.backgroundColor = "#e8f5e9";

    const rows = table.querySelectorAll(".sapUiTableCtrl .sapUiTableTr");
    rows.forEach(row => {
      const cells = row.querySelectorAll("td.sapUiTableCell");
      const cell = cells[totalIdx];
      if (!cell) return;
      cell.style.backgroundColor = "#e8f5e9";

      const span = cell.querySelector(".sapMObjectNumberText, .sapMText, span");
      if (!span) return;
      const raw = (span.textContent || "").trim();
      const val = parseNumber(raw);
      const { icon, color } = colorFor(val);

      if (color) {
        span.style.color = color;
        span.style.fontWeight = "600";
        if (!raw.startsWith("🟢") && !raw.startsWith("🟡") && !raw.startsWith("🔴")) {
          span.textContent = `${icon} ${raw}`;
        }
      }
    });
  }

  function formatAll() {
    document.querySelectorAll(".sapUiTable").forEach(formatGridTable);
  }

  function init() {
    // Formatea una vez cuando todo carga
    setTimeout(formatAll, 800);

    // Observador sin loop: se desconecta mientras actúa
    const observer = new MutationObserver(mutations => {
      observer.disconnect(); // evitar reentrancia
      formatAll();
      observer.observe(document.body, { childList: true, subtree: true });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
