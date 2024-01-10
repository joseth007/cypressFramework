/// <reference types = 'Cypress' />
//reference displays cypress' functions

import 'cypress-file-upload';
import WebTables_Page from '../../pages/toolsQA/webTables_Page';
require('@4tw/cypress-drag-drop')
require('cypress-plugin-tab')
require('cypress-xpath')

describe('WebTables', () => { 

    beforeEach( "Precondicion: Hacer Login", () => {
        cy.session('Login', () => {
            WebTables_Page.visit()
            WebTables_Page.getTitle().should('contains', 'DEMOQA')
            cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        })
        

    })


    it('AddRegister', function () {
        WebTables_Page.clickAddBtn()
        WebTables_Page.inputFirstName('Joseth')
        WebTables_Page.inputLastName('Vargas')
        WebTables_Page.inputEmail('joseth.cr@gmail.com')
        WebTables_Page.inputAge('32')
        WebTables_Page.inputSalary(3000)
        WebTables_Page.inputDepartment('Avenue Unit 5')
        WebTables_Page.clickSubmitBtn()
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('have.text','Joseth')

    })
});