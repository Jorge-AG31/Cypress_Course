// const { defineConfig } = require("cypress");
// //const { config } = require("cypress/types/bluebird");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// // const preprocessor = require("@badeball/cypress-cucumber-preprocessor").preprocessor;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

//----------------------
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here      
//     },
//     
//   },
  
  
// });

//----------------------
 
 
// module.exports = defineConfig({
//   e2e: {
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });
    
//       on("file:preprocessor",bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     }, 
    
//     allureWriter(on, config){
 
//       return config;
//     },

//     specPattern: "cypress/e2e/Features_Cucumber/*.feature",//["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
//     chromeWebSecurity: false,
//     env: {
//       allureReuseAfterSpec: true,
//     },
//     viewportWidth: 1500,
//     viewportHeight: 900,
//     chromeWebSecurity: false,
//     pageLoadTimeout:9000, // tiempo max de carga para la página
//     defaultCommandTimeout: 10000 // tiempo maximo de carga para un campo
//   }

// });

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
 
// async function setupNodeEvents(on, config) {
//   // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución y más,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
 
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin.default(config)],
//     })
//   );
//   allureWriter(on, config);
 
//   return config;
// }
 
module.exports = defineConfig({
  
  e2e: {
    async setupNodeEvents(on, config){
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    //specPattern: "cypress/e2e/*.feature",
    //baseUrl: "",
    chromeWebSecurity: false,
    experimentalStudio: true,
    
    env: {
      allureReuseAfterSpec: true,
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 70000,
    projectId: "h5hr82"
  },
  
    nonGlobalStepDefinitions: true,
    // stepDefinitions: "cypress/e2e/*.js"
  
});
