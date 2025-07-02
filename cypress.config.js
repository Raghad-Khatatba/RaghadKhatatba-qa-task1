const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // baseUrl: '',
    setupNodeEvents(on, config) {
      // you can leave this empty or configure plugins here
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
