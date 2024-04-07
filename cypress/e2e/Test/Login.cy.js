//import { Login } from '../../support/PageObjectModel/Login.Page';
const { login } = require('../../support/PageObjectModel/Login.Page');
const {authenticate, inventory} = Cypress.env('endpoint');
const {userName,password} = Cypress.env('standarUser');
const {userNameError,passwordError} = Cypress.env('errorUser');

describe('User Login', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('contain', authenticate);
    });

    it.only('Validate login successfully', () => {
        cy.log(`Username ${userName} and Password ${password}`);
        login.typeUserName(userName);
        login.typePassword(password);
        login.submitLogin();

        //Assertion
        cy.url().should('contain', inventory);
    });

    it('Validate login unsuccessfully', () => {
        cy.log(`Username ${userNameError} and Password ${passwordError}`);
        login.typeUserName(userNameError);
        login.typePassword(passwordError);
        login.submitLogin();


        //Assertion
        login.get.errorMessage().should(
            'contain',
            'Epic sadface: Username and password do not match any user in this service'
        );
    });

});
