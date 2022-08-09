/// <reference types = "Cypress"/>

describe("Bienvenido al curso de Cypress seccion 1", ()=>{

    it("Type enter", () =>{
         cy.visit("https://www.google.com")
         cy.title().should('eq',"Google")
         cy.wait(1500)
         cy.get("[name='q']").type("cypress io {enter}")
         cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
         
         cy.title().should('eq', "JavaScript End to End Testing Framework | cypress.io testing tools")

     })
 
 })//Cierre de describe