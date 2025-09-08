> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.


## Manifest

```json
{
  "name": "RouteSecondPage",             // Nombre interno de la ruta
  "pattern": "SecondPage",               // Patrón de URL que activa esta ruta (/#SecondPage)
  "target": ["TargetSecondPage"]         // Objetivo(s) al que se dirige esta ruta
}

```

```json
"TargetSecondPage": {
  "id": "SecondPage",                    // ID del control o vista objetivo
  "name": "SecondPage"                   // Nombre de la vista que se mostrará (sin extensión)
}

```
