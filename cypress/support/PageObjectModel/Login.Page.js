///<reference types="cypress"/>
class Login {

    //Constructor

    get = {
        endpoint:      () => cy.visit('/index'),
        userNameInput: () => cy.get('#user-name'),
        passowrdInput: () => cy.get('#password'),
        submitBoton:   () => cy.get('#login-button'),
        errorMessage:  () => cy.get('[data-test="error"]')
    }

    //Methods & Functions

    /**
     * Method that allows you to write the username
     * @param userName   
    */
    typeUserName(data){
        this.get.userNameInput().type(data);
    }

    /**
     * Method that allows you to write the password
     * @param userName   
    */
    typePassword(data){
        this.get.passowrdInput().type(data);
    }

    /**
     * Method that allows you to click on login button   
    */
    submitLogin(){
        this.get.submitBoton().click();
    }

}

//Export class
export const login = new Login();