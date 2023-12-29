/// <reference types = "Cypress"/>

describe("Ejemplo de Type pageUp pageDown", ()=>{

    /*it("Type pageUp", () =>{
         cy.visit("")
     })*/

     it("Type pageDown", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq','Datos Personales | TestingQaRvn')
        cy.wait(1000)

        cy.get("[name='field_21'").type("Joseth {pagedown}")

    })
 
 })//Cierre de describe