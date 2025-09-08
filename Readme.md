> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## Manifest

```json
{
  "name": "RouteThirdPage", // Nombre interno de la ruta
  "pattern": "ThirdPage/{param}", // Patrón de URL que activa esta ruta con parámetro dinámico {param}
  "target": [
    "TargetThirdPage" // Objetivo(s) al que se dirige esta ruta
  ]
}
```

```json
"TargetThirdPage": {
    "id": "ThirdPage",                     // ID del control o vista objetivo
    "name": "ThirdPage"                    // Nombre de la vista que se mostrará (sin extensión)
}
```
