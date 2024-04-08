const {Given, When, And, Then} = require("cypress-cucumber-preprocessor/steps");
const { login } = require('../../../../support/PageObjectModel/Login.Page');
const { authenticate, inventory } = Cypress.env('endpoint');
const { userName, password } = Cypress.env('standarUser');
const { userNameError, passwordError } = Cypress.env('errorUser');


Given('I go to the login web page', () => {
    cy.visit('/');
    cy.url().should('contain', authenticate);
});

When('I enter my credentials', (datatable) => {

    datatable.hashes().forEach(element => {
        cy.log(`Username ${element.username} and Password ${element.password}`);
        login.typeUserName(element.username);
        login.typePassword(element.password);
    });
    
});

And('I click on the login button', () => {
    login.submitLogin();
});

Then('I should see that the URL contains the path {string}', (data) => {
    cy.url().should('contain', data);
});

Then('I should see an error message {string}', (data) => {
   login.get.errorMessage().should('contain', data);
});