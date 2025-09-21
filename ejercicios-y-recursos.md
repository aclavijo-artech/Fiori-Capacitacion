Este file contiene los materiales y ejercicios prácticos correspondientes a las clases del curso. Aquí encontrarás recursos por clase y las consignas para realizar los ejercicios asignados.
## Recursos

- **Clase 1:**
    - [Node.js — Download Node.js®](https://nodejs.org/en/download), Desde este enlace podrán descargar la última versión de Node.js.
    - [Git - Downloads](https://git-scm.com/downloads), Desde aquí pueden descargar la última versión de Git. 
        - Si ya lo tienen instalado, pueden actualizarlo desde la terminal con el siguiente comando: ```git update-git-for-windows```
    - [GitHub](https://github.com/), Tener una cuenta de Github
        - [Tutorial: ¿Cómo tener una cuenta en GitHub](https://youtu.be/f7Qn1Rq9tSo?si=X_POeAHgu-wNgkbV&t=18)
    - VSC
        - [Visual Studio Code - Code Editing](https://code.visualstudio.com/), Para quienes no tienen Visual Studio Code, pueden descargarlo desde este enlace.

- **Clase 2:**
    -  Extensiones
        - [SAP Fiori Tools - Extension Pack](https://marketplace.visualstudio.com/items?itemName=SAPSE.sap-ux-fiori-tools-extension-pack)
        - [Console Ninja](https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja)
        - [Markdown Preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
        - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- **Clase 4:**
    - [Documentación SAPUI5](https://ui5.sap.com/)
    - [Explorador de Iconos SAPUI5](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)
    - [Sistema de Diseño SAP Fiori](https://www.sap.com/design-system/?external)
    - [Librería de Apps SAP Fiori](https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer)

- **Clase 5:**
    - [OASIS OData Vocabularies - Vocabularios estándar para anotaciones OData](https://github.com/oasis-tcs/odata-vocabularies)
    - [SAP OData Vocabularies - Vocabularios SAP para anotaciones semánticas en OData](https://github.com/SAP/odata-vocabularies)
    - [Documentación SAPUI5 sobre SAP Fiori Elements - Guía oficial y ejemplos](https://github.com/SAP-docs/sapui5/tree/main/docs/06_SAP_Fiori_Elements)
    - [Annotation Common](https://sap.github.io/odata-vocabularies/vocabularies/Common.html)
    - [Annotation UI](https://sap.github.io/odata-vocabularies/vocabularies/UI.html)
    - [OData Site](https://www.odata.org/)
    - [SAP Business Technology Platform (SAP BTP)](https://account.hana.ondemand.com/#/home/welcome)

## Ejercicio 

- **Clase 1:**
    - Completar el formulario compartido a través de Microsoft Teams.

- **Clase 2:**
    - Crear una aplicación UI5 sin utilizar plantilla.
        - La aplicación debe contener:
            - Un campo de entrada (input) donde se le pida al usuario que ingrese su nombre.
            - Un botón que, al hacer clic, muestre el nombre ingresado por el usuario.

- **Clase 3:**
    - Deberán crear una aplicación UI5 utilizando plantilla, tal como lo hicimos en clase.
    - La aplicación debe incluir lo siguiente:
        > - Una pantalla principal donde esté tu información básica:
        > - Nombre
        > - Apellido
        > - Email
        > - GitHub
    - Dos botones que te lleven a vistas de detalle:
        > - Un detalle sin parámetros, donde hablarás sobre vos y tus hobbies.
        > - Un detalle con parámetros, donde mostrarás tus cosas profesionales: qué tecnologías manejás, en qué áreas trabajaste, etc.

- **Clase 4:**
    - Deberán crear una aplicación Fiori Elements utilizando la plantilla List Report, tal como lo hicimos en clase.
    - La aplicación debe incluir lo siguiente:
        > - Usar el oData de NorthWind, pero no podrán usar como método principal el de products, ya que fue el que se usó en clase.
        > - Deberá tener 4 filtros como mínimo para facilitar la búsqueda.
        > - Deberá mostrar una tabla con al menos 5 columnas.
        > - Deberá tener una vista de detalle para cada ítem, donde se muestre el detalle completo del elemento seleccionado.
    - Incluir un botón custom con funcionalidad propia:
        > - Colocar un controller custom para manejar esa funcionalidad.

- **Clase 5:**
    - Deberán crear una aplicación Fiori o reutilizar una ya creada y hacerle deploy en Cloud Foundry, tal como se hizo en clase.
    - La aplicación debe incluir lo siguiente:
        > - Usar el OData de NorthWind, pero **no conectarlo directamente**, sino hacerlo mediante **Destination** configurado en Cloud Foundry.
        > - Colocar la aplicación en **SAP Work Zone**.
        > - En el Tile que representa la aplicación en Work Zone, debe aparecer el texto:
            > - `<nombre> - Ejercicio 5`
            > - Ejemplo: `AndresClavijo - Ejercicio5`