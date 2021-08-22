/// <reference types="cypress" />

context('Funcionalidade Pré-cadastro', () => {
    var faker = require('faker')
    let fakerName = faker.name.firstName()
    let fakerLast = faker.name.lastName()
    let fakerEmail = faker.internet.email(fakerName)
    let fakerPassword = faker.internet.password()

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(fakerEmail)
        cy.get('#reg_password').type(fakerPassword)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakerName)
        cy.get('#account_last_name').type(fakerLast)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });

});