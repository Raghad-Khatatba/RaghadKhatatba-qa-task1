const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
   // baseUrl: '',
   specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
         on("file:preprocessor", cucumber());
    },
    screenshotsFolder: 'Myscreenshots',
    videosFolder: 'MyVideos',
    video: true,
    videoUploadOnPasses: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/myReport',
    overwrite: false,
    html: true,
    json: false,
    timestamp : "mmddyyyy_HHMMss"
  },
  },
});
