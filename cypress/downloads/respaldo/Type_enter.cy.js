/// <reference types = "Cypress"/>
require('cypress-xpath');

describe("Bienvenido al curso de Cypress seccion 1", ()=> {

    it("Type enter", async () =>{
         await cy.visit("https://www.google.com")
         await cy.title().should('eq',"Google")
         await cy.wait(1500)
         await cy.get("[name='q']").type("cypress io {enter}")
         await cy.get('//h3[contains(.,"Cypress: JavaScript Component Testing and E2E Testing ...")]').click()
         
         cy.title().should('eq', "JavaScript End to End Testing Framework | cypress.io testing tools")

     })
 
 })//Cierre de describe