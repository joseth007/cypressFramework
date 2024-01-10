
class WebTables_Page{
    elements = {
        titleTag : () => cy.title(), 
        addBtn : () => cy.get('#addNewRecordButton'),
        searchBar :() => cy.get('#searchBox'),
        firstName : () => cy.get('#firstName'),
        lastName : () => cy.get('#lastName'),
        email : () => cy.get('#userEmail'),
        age : () => cy.get('#age'),
        salary : () => cy.get('#salary'),
        department : () => cy.get('#department'),
        submitBtn : () => cy.get('#submit'),
        deleteRecord : () => cy.get('[id="delete-record-3"]')
    }
    visit(){
        cy.visit('https://demoqa.com/webtables')
    }

    clickAddBtn(){
        this.elements.addBtn().should('be.visible').click()
    }
    clickSubmitBtn(){
        this.elements.submitBtn().should('be.visible').click()
    }
    clickDeleteRecord3(){
        this.elements.deleteRecord().should('be.visible').click()
    }
    getTitle(){
        return this.elements.titleTag()
    }
    inputSearchBar(nombre){
        this.elements.searchBar().should('be.visible').type(nombre)
    }
    inputFirstName(firstName){
        this.elements.firstName().should('be.visible').type(firstName)
    }
    inputLastName(lastName){
        this.elements.lastName().should('be.visible').type(lastName)
    }
    inputEmail(email){
        this.elements.email().should('be.visible').type(email)
    }
    inputAge(age){
        this.elements.age().should('be.visible').type(age)
    }
    inputSalary(salary){
        this.elements.salary().should('be.visible').type(salary)
    }
    inputDepartment(department){
        this.elements.department().should('be.visible').type(department)
    }

}

export default new WebTables_Page()