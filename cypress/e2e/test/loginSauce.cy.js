/// <reference types = 'Cypress' />
//reference displays cypress' functions

import 'cypress-file-upload';
import Login_Page_Sauce from '../pages/login_Page_Sauce';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Login Page', () => { 
   

    let time = 1000
    beforeEach( function() {
        cy.visit('https://www.saucedemo.com')
        cy.title().should('eq', 'Swag Labs')
        cy.wait(time)
    })

    it('Valid Login', function () {
        Login_Page_Sauce.typeUsername('standard_user')
        Login_Page_Sauce.typePasword('secret_sauce')
        Login_Page_Sauce.clickLoginButon('secret_sauce')


    })

    it('Invalid Login Locked out user', function () {
        Login_Page_Sauce.typeUsername('locked_out_user')
        Login_Page_Sauce.typePasword('secret_sauce')
        Login_Page_Sauce.clickLoginButon()
        Login_Page_Sauce.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })


});