const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 720,

  chromeWebSecurity: false,

  pageLoadTimeout: 10000,

  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.saucedemo.com/',
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
