/// <reference types = 'Cypress' />
//reference displays cypress' functions

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('description', () => {

    let time = 1000
    beforeEach(() => {
        cy.session('Login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]').type('Admin').tab().type('admin123').tab().click()
            cy.title().should('eq', 'OrangeHRM')
            cy.wait(time)

        })
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    })

    it('test1', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        cy.wait(10000)
    })

    it('test2', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        cy.wait(10000)
    })
});