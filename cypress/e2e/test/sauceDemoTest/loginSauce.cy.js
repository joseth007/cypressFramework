/// <reference types = 'Cypress' />
//reference displays cypress' functions

import 'cypress-file-upload';
import Login_Page_Sauce from '../../pages/sauceDemo/login_Page';
import Inventory_Page from '../../pages/sauceDemo/inventory_Page'
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Login Page', () => { 
   

    let time = 1000
    beforeEach( function() {
        Login_Page_Sauce.visit()
        cy.title().should('eq', 'Swag Labs')

    })

    it('Valid Login', function () {
        Login_Page_Sauce.typeUsername('standard_user')
        Login_Page_Sauce.typePasword('secret_sauce')
        Login_Page_Sauce.clickLoginButon('secret_sauce')
        Inventory_Page.validateTitle().should('have.text', 'Products')


    })

    it('Invalid Login Locked out user', function () {
        Login_Page_Sauce.typeUsername('locked_out_user')
        Login_Page_Sauce.typePasword('secret_sauce')
        Login_Page_Sauce.clickLoginButon()
        Login_Page_Sauce.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })


});