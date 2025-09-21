> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## Manifest

```json
"multiSelect": true,     // Permite seleccionar múltiples filas en la tabla.
"type": "GridTable",     // Define el tipo de tabla. En este caso, GridTable (basada en sap.ui.table).
"copy": false            // Desactiva la funcionalidad de copiar texto desde las celdas de la tabla.
```

## Diferentes Tipos de Tables

| Tipo (`type`)         | Basado en                      | Descripción                                                                                                                               |
| --------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `ResponsiveTable`     | `sap.m.Table`                  | Tabla adaptable al tamaño de pantalla. Ideal para móviles y tablets. Menor rendimiento con muchos datos.                                  |
| `GridTable`           | `sap.ui.table.Table`           | Tabla clásica con columnas fijas. Permite scroll horizontal, ordenamiento, agrupación y selección múltiple.                               |
| `AnalyticalTable`     | `sap.ui.table.AnalyticalTable` | Tabla avanzada para análisis jerárquico. Soporta agrupaciones, subtotales y jerarquías. Útil para grandes volúmenes de datos.             |
| `TreeTable`           | `sap.ui.table.TreeTable`       | Especializada para mostrar estructuras jerárquicas tipo árbol (por ejemplo: categorías, carpetas, relaciones padre-hijo).                 |
| `ResponsiveTreeTable` | `sap.m.Tree` (Fiori 3.1+)      | Variante responsiva del `TreeTable`. Funciona bien en pantallas pequeñas y grandes, mostrando datos jerárquicos. _(No siempre soportado)_ |
