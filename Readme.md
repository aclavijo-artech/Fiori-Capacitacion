# 🎉  Capacitación UI5 - SAP Fiori

¡Bienvenidos a la capacitación de **SAP UI5**!
En este curso exploraremos juntos el desarrollo de aplicaciones Fiori, aplicando las mejores prácticas y técnicas para crear soluciones modernas, escalables y atractivas. 💻✨

> Gracias por ser parte de esta experiencia 🚀
¡Manos al código y a construir aplicaciones increíbles! 💥

---

## 📑 Temario

- En esta sección encontrarás el temario completo:

    ### ✅ CLASE 1 – Introducción a SAP Fiori y SAPUI5

    - ¿Qué es SAP?
    - SAP Clásico
    - ¿Qué es SAP Fiori?
        - Principios UX
        - Tipos de apps estándar
        - Launchpad
    - ¿Qué es SAPUI5 / OpenUI5?
        - Explicación de JavaScript
        - Framework JS basado en MVC
    - **SetUp del entorno**:
        - SAP Business Application Studio (BAS) / local (VSC)
        - Git y GitHub
        - Node.js y UI5 CLI

    ### ✅ CLASE 2 – Proyecto Freestyle UI5 (Parte 1): Arquitectura y componentes

    - Crear proyecto Freestyle (Sin plantilla)
        - Estructura del proyecto:
            - `manifest.json`
            - `Component.js`
            - `webapp/*`
            - Controladores y vistas (XML)
            - Data Binding con JSONModel
    - Controles comunes UI5
    - Crear proyecto Freestyle (Desde plantilla)

    ### ✅ CLASE 3 – Proyecto Freestyle UI5 (Parte 2): Routing y servicios

    - Routing entre vistas
    - Navegación con parámetros
    - Consumo de servicios OData (Mock y Reales)
    - Fragments y reutilización de vistas

    ### ✅ CLASE 4 – Fiori Elements y anotaciones

    - ¿Qué es Fiori Elements?
    - Plantillas
    - Crear app Fiori Elements en BAS
    - Anotaciones
    - Crear Modelo y Vista desde CDS View

    ### ✅ CLASE 5 – SAP BTP, roles y despliegue con MTA

    - Continuación de Fiori Elements (Extensiones y adaptaciones de vista/controlador)
    - ¿Qué es SAP BTP?
        - Subaccount, espacio, entitlements
        - SAP Launchpad Service (Work Zone)
            - Roles, catálogos, grupos en BTP
    - Introducción al concepto de MTA (Multi-Target Application)
        - `mta.yaml`, módulos y recursos
        - Archivos: `xs-app.json`, `ui5-deploy.yaml`
    - Build y deploy de una app UI5 en el Launchpad BTP

    ### ✅ CLASE 6 – Automatización: Build y CI/CD

    - **Build Automation**:
        - `ui5 build`, `mbt build`
        - Scripts en `package.json`
    - **Introducción a CI/CD**:
        - ¿Qué es y cómo mejora el flujo de desarrollo?
        - SAP Continuous Integration and Delivery
        - Configurar un pipeline para apps UI5

    ### ❌ CLASE 7 – Testing UI5 

    - Testing con UI5:
        - QUnit (unit tests): controllers, formatters
        - OPA5 (integration tests): UI, navegación
    - Introducción a TypeScript en UI5:
        - ¿Por qué usar TS?
        - Proyecto base con TypeScript
        - Configuración de `tsconfig.json` y ui5-tooling

---

## 🥳

[Ejercicios y Recursos](./ejercicios-y-recursos.md)

---

## 🌱 Branch

- **[Clase 2](#-clase-2--proyecto-freestyle-ui5-parte-1-arquitectura-y-componentes)**
    - [1.0-Hello_World](../../tree/1.0-Hello_World)  
    - [1.1-Boostrapping](../../tree/1.1-Boostrapping)  
    - [1.2-View](../../tree/1.2-View)  
    - [1.3-Controller](../../tree/1.3-Controller)
    - [1.0-Ejercicio](../../tree/1.0-Ejercicio)

- **[Clase 3](#-clase-3--proyecto-freestyle-ui5-parte-2-routing-y-servicios)**
    - [2.0-Wizard_Template](../../tree/2.0-Wizard_Template)  
    - [2.1-Routing_Without_Params](../../tree/2.1-Routing_Without_Params)  
    - [2.2-Routing_With_Params](../../tree/2.2-Routing_With_Params)  
    - [2.3-Consume_Route_Param](../../tree/2.3-Consume_Route_Param)  
    - [2.4-Add_And_Use_Local_Model_JSONModel](../../tree/2.4-Add_And_Use_Local_Model_JSONModel)  
    - [2.5-Add_And_Use_Global_Model_JSONModel](../../tree/2.5-Add_And_Use_Global_Model_JSONModel)  
    - [2.6-Fragments](../../tree/2.6-Fragments)  
    - [2.7-Formatter](../../tree/2.7-Formatter)
    - [2.0-Ejercicio](../../tree/2.0-Ejercicio)

- **[Clase 4](#-clase-4--fiori-elements-y-anotaciones)**
    - [3.0-List_Report](../../tree/3.0-List_Report)  
    - [3.1-Filters](../../tree/3.1-Filters)  
    - [3.2-Tables](../../tree/3.2-Tables)  
    - [3.3-Object_Pages](../../tree/3.3-Object_Pages)  
    - [3.4-Controller_Extension](../../tree/3.4-Controller_Extension)  
    - [3.0-Ejercicio](../../tree/3.0-Ejercicio)

- **[Clase 5](#-clase-5--sap-btp-roles-y-despliegue-con-mta)**
    - [4.0-MTA](../../tree/4.0-MTA)  
    - [4.1-XS_App/Security](../../tree/4.1-XS_App/Security)  
    - [4.2-UI5_Deploy](../../tree/4.2-UI5_Deploy)

💡 **Tip:**  
Cuando bajes el proyecto, puedes cambiar de rama con el siguiente comando:  

```bash
git switch <nombre-de-la-rama>
# También lo puedes hacer con:
git checkout <nombre-de-la-rama>
```

---

## 🏆 Proyecto Final

- **Objetivo:** en proceso