class Login_Page_Sauce{
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePasword(password){
        this.elements.passwordInput().type(password)
    }

    clickLoginButon(){
        this.elements.loginButton().click()
    }

    login(username, password){
        this.typeUsername(username)
        this.typePasword(password)
        this.clickLoginButon()
    }

    validateMessageError(){
        return this.elements.errorMessage

    }


}export default new Login_Page_Sauce()