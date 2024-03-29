const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'tz42r5',
  e2e: {
    testIsolation: false,
    failOnStatusCode: false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  chromeWebSecurity:false
})
