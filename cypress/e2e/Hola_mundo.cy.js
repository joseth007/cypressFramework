/// <reference types = "Cypress"/>

describe("Bienvenido al curso de Cypress seccion 1", ()=>{

   /* it("Mi primer test -> Hola Mundo", () =>{
        cy.log("Hola Mundo")
        cy.wait(4500)
    })

    it("Segundo test -> campo name", () =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get("#wsf-1-field-21").type("Joseth")
        cy.wait(4500)
    })*/

    it("Abrir Demoqa -> Login", () =>{
        cy.visit("https://demoqa.com/")
        cy.title().should('eq', 'DEMOQA')
    })
})//Cierre de describe