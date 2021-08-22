/// <reference types = "cypress" /> 

context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com dados válidos', () => {
        cy.get('#username').type('rafael.ide@outlook.com')
        cy.get('#password').type('Rafaelide0602')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, rafael.ide (não é rafael.ide? Sair)')
    });
    it('Login com senha inválida', () => {
        cy.get('#username').type('rafael.ide@outlook.com')
        cy.get('#password').type('senha errada')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail rafael.ide@outlook.com está incorreta. Perdeu a senha?')
    });
    it('Login com email inválido', () => {
        cy.get('#username').type('rafael.inválido@outlook.com')
        cy.get('#password').type('Rafaelide0602')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it('Login sem campo senha', () => {
        cy.get('#username').type('rafael.inválido@outlook.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Erro: O campo da senha está vazio.')
    });
    it('Login sem campo email', () => {
        cy.get('#password').type('Rafaelide0602')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Erro: Nome de usuário é obrigatório.')
    });
    it('Login com email incorreto', () => {
        cy.get('#username').type('rafael.inválido@@@outlook.com')
        cy.get('#password').type('Rafaelide0602')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('contain','Erro: O usuário rafael.invalido@@@outlook.com não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    });
    

});