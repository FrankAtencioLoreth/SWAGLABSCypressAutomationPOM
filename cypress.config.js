const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  chromeWebSecurity: false,

  pageLoadTimeout: 10000,

  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',

    "specPattern": "**/*.feature",
    
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    }
  },

  env: {
    standarUser: {
      userName: 'standard_user',
      password: 'secret_sauce'
    },

    errorUser: {
      userNameError: 'user',
      passwordError: 'secret'
    },

    endpoint: {
      authenticate: '/',
      inventory: '/inventory.html'
    }
  }

});
