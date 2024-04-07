const {Given, When, And, Then} = require("cypress-cucumber-preprocessor/steps");
const { login } = require('../../../../support/PageObjectModel/Login.Page');
const { authenticate, inventory } = Cypress.env('endpoint');
const { userName, password } = Cypress.env('standarUser');
const { userNameError, passwordError } = Cypress.env('errorUser');


Given('I go to the login web page', () => {
    cy.visit('/');
    cy.url().should('contain', authenticate);
});

When('I enter my credentials', () => {
    cy.log(`Username ${userName} and Password ${password}`);
    login.typeUserName(userName);
    login.typePassword(password);
});

And('I click on the login button', () => {
    login.submitLogin();
});

Then('I should see that the URL contains the path {string}', (path) => {
    cy.url().should('contain', path);
});