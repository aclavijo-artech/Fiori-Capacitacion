> **Nota:** Los archivos `package.json` y `manifest.json` utilizan el formatos JSON, el cual **no permiten comentarios** estándar dentro del propio archivo. Por eso, los comentarios explicativos se han colocado aquí en el archivo Markdown, para documentar cada sección y facilitar la comprensión de la configuración sin afectar la validez de los archivos originales.

## XS-App

```json
{
  // El archivo de bienvenida predeterminado cuando se accede a la app sin ruta específica
  "welcomeFile": "/index.html",

  // Define el método de autenticación base: 'route' indica que se define por ruta individualmente
  "authenticationMethod": "route",

  // Aquí se definen todas las reglas de enrutamiento
  "routes": [
    {
      // Esta ruta captura cualquier solicitud que comience con /V2/ y lo que sigue (.*)
      "source": "^/V2/(.*)$",

      // Redirige internamente a la misma ruta (efecto espejo)
      "target": "/V2/$1",

      // Nombre del destino configurado en el servicio de destinations (probablemente un backend OData)
      "destination": "ODataSite",

      // No requiere autenticación explícita para esta ruta
      "authenticationType": "none",

      // Desactiva la protección CSRF para esta ruta (útil si solo se hace lectura, pero ojo si se hacen POST/PUT/DELETE)
      "csrfProtection": false
    },
    {
      // Ruta para cargar recursos de SAPUI5 como controles, estilos, etc.
      "source": "^/resources/(.*)$",

      // Se mantiene la misma estructura de ruta al hacer proxy
      "target": "/resources/$1",

      // No se requiere autenticación para estos recursos públicos
      "authenticationType": "none",

      // Destino configurado que apunta a https://ui5.sap.com o similar
      "destination": "ui5"
    },
    {
      // Ruta para recursos de test de SAPUI5 (como QUnit)
      "source": "^/test-resources/(.*)$",

      "target": "/test-resources/$1",

      "authenticationType": "none",

      "destination": "ui5"
    },
    {
      // Ruta genérica (catch-all) que aplica a cualquier otra petición que no coincida con las anteriores
      "source": "^(.*)$",

      // Redirige la ruta tal como viene
      "target": "$1",

      // Servicio que sirve las aplicaciones HTML5 desde el HTML5 App Repository
      "service": "html5-apps-repo-rt",

      // Requiere autenticación mediante XSUAA (usuario autenticado en BTP)
      "authenticationType": "xsuaa"
    }
  ]
}
```

## XS-Security

```json
{
  // Nombre único de la aplicación que usa XSUAA (debe coincidir con el del módulo en mta.yaml)
  "xsappname": "comandresclase7",

  // Modo de arrendamiento (tenancy). "dedicated" significa que esta app se despliega por subcuenta (no multitenant).
  "tenant-mode": "dedicated",

  // Descripción general del perfil de seguridad de la app (solo informativo)
  "description": "Security profile of called application",

  // Lista de scopes definidos en esta app. Vacío significa que no se definen permisos personalizados aún.
  "scopes": [],

  // Lista de plantillas de roles que pueden asignarse a usuarios. También está vacío por ahora.
  "role-templates": []
}
```