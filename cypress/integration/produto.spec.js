/// <reference types="cypress" />

context('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar produto de lista', () => {
        cy.get('[class="product-block grid"]')
        .contains("Argus All-Weather Tank")
        .click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .contains("Argus All-Weather Tank")
        .click()

        var quantidade = 6


        cy.get('.button-variable-item-S')
        .click()

        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item')
        .click()

        cy.get('.input-text')
        .clear()
        .type(quantidade)

        cy.get('.single_add_to_cart_button')
        .click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain',quantidade + " × “Argus All-Weather Tank” foram adicionados no seu carrinho.")
        
    });
});