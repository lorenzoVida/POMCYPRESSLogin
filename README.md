POM CYPRESS Login

Este proyecto contiene pruebas automatizadas de interfaz de usuario implementadas con Cypress utilizando el patrón Page Object Model (POM). Las pruebas se enfocan principalmente en escenarios de inicio de sesión en el sitio web de práctica [Practice Test Automation](https://practicetestautomation.com/).

## Estructura del Proyecto

```
POMCYPRESSLogin/
├── cypress/
│   ├── e2e/                # Tests de extremo a extremo
│   │   ├── example05.cy.js
│   │   ├── examplelogin.cy.js
│   │   └── spec.cy.js
│   ├── fixtures/           # Datos de prueba 
│   └── support/            # Código de soporte
│       ├── commands.js
│       ├── e2e.js
│       └── pages/          # Objetos de página (POM)
│           ├── BlogPage.js
│           ├── CursosPage.js
│           ├── TodosPage.js
│           ├── homePage.js
│           └── loginPage.js
├── cypress.config.js       # Configuración de Cypress
├── package-lock.json
└── package.json
```

## Requisitos Previos

- Node.js (versión recomendada: 16.x o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/lorenzoVida/POMCYPRESSLogin.git
   cd POMCYPRESSLogin
   ```

2. Instala las dependencias:
   ```bash
   npm install cypress 
   ```

## Ejecutar Pruebas

Para ejecutar las pruebas en modo headless:
```bash
npx cypress run
```

Para abrir el Test Runner de Cypress:
```bash
npx cypress open
```

---

## Arquitectura de Pruebas

Este proyecto utiliza el Patrón de Objeto de Página (POM) para separar la lógica de prueba de los detalles de implementación de la interfaz de usuario:

- **Page Objects**: Encapsulan los elementos y acciones de cada página en clases separadas (ubicadas en `cypress/support/pages/`).
- **Pruebas**: Ubicadas en `cypress/e2e/`, utilizan los Page Objects para interactuar con la aplicación.

---

## Configuración

El proyecto está configurado para usar [https://practicetestautomation.com/](https://practicetestautomation.com/) como URL base para todas las pruebas, como se define en `cypress.config.js`.