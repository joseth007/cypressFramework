class Inventory_Page{
    elements = {
        titleSpanLbl : () => cy.get('.title'),
        firstItemLbl : () => cy.get('#item_4_title_link .inventory_item_name'),
        firtsItemBtn : () => cy.get('#add-to-cart-sauce-labs-backpack'),
        secondItemLbl : () => cy.get('#item_0_title_link .inventory_item_name'),
        secondItemBtb: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
        thirdItemLbl : () => cy.get('#item_1_title_link .inventory_item_name'),
        thirdItemBtn: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
        fourdItemLbl : () => cy.get('#item_5_title_link .inventory_item_name'),
        fourthItemBtn : () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
        fifthItemLbl : () => cy.get('#item_2_title_link .inventory_item_name'),
        fifthItemBtn : () => cy.get('#add-to-cart-sauce-labs-onesie'),
        sixthItemLbl : () => cy.get('#item_3_title_link .inventory_item_name'),
        sixthItemBtn : () => cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)'),
        counterCartItem : () => cy.get('.shopping_cart_badge'),
        cartItem : () => cy.get('.shopping_cart_link')

    }

    validateTitle(){
        return this.elements.titleSpanLbl()
    }

    getFirstItem(){
        return this.elements.firstItemLbl()
    }
    getSecondItem(){
        return this.elements.secondItemLbl()
    }
    getThirdItem(){
        return this.elements.thirdItemLbl()
    }
    getFourthItem(){
        return this.elements.fourdItemLbl()
    }
    getFifthItem(){
        return this.elements.fifthItemLbl()
    }
    getSixthItem(){
        return this.elements.sixthItemLbl()
    }
    getCounterCartItem(){
        return this.elements.counterCartItem()
    }
    clickFirstBtn(){
        this.elements.firtsItemBtn().click()
    }
    clickSecondBtn(){
        this.elements.secondItemBtb().click()
    }
    clickThirdBtn(){
        this.elements.thirdItemBtn().click()
    }
    clickFourthBtn(){
        this.elements.fourthItemBtn().click()
    }
    clickFifthBtn(){
        this.elements.fifthItemBtn().click()
    }
    clickSixthBtn(){
        this.elements.sixthItemBtn().click()
    }
    clickCartItem(){
        this.elements.cartItem().click()
    }
}
export default new Inventory_Page()