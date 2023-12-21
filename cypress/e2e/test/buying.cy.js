/// <reference types = 'Cypress' />
//reference displays cypress' functions

import 'cypress-file-upload';
import Login_Page_Sauce from '../pages/sauceDemo/login_Page';
import Inventory_Page from '../pages/sauceDemo/inventory_Page';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('Buy Items', () => {


    beforeEach( "Precondicion: Hacer Login", () => {
        cy.session('Login', () => {
            Login_Page_Sauce.visit()
            Login_Page_Sauce.login('standard_user', 'secret_sauce')
            Inventory_Page.validateTitle().should('have.text', 'Products')
        })
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    })

    it('Add BackPack and Bike Light to the cart', function () {
        cy.wait(2000)
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.wait(2000)
        Inventory_Page.clickFirstBtn()
        Inventory_Page.clickSecondBtn()
        Inventory_Page.getCounterCartItem().should('have.text', 2)
        Inventory_Page.clickCartItem()
    })
    it('Add BackPack and Bike Light to the cart', function () {
        cy.wait(2000)
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.wait(2000)
        Inventory_Page.clickFirstBtn()
        Inventory_Page.clickSecondBtn()
        Inventory_Page.getCounterCartItem().should('have.text', 2)
        Inventory_Page.clickCartItem()
    })
});