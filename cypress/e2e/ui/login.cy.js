/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        // Executa antes de cada cenário
        cy.viewport(1400,700)
        cy.visit('/login');
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-test="login-email"]').type('guilherme.lamim96@gmail.com');
        cy.get('[data-test="login-password"]').type('123456');
        cy.get('[data-test="login-submit"]').click();
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Guilherme Jackson Lamim')
    });
    
    it('Deve validar mensagem de erro ao fazer login com dados inválidos', () => {
        cy.get('[data-test="login-email"]').type('guilherme.lamim96@gmail.com');
        cy.get('[data-test="login-password"]').type('1232456');
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });

    it('Deve fazer login com sucesso - Usando commands', () => {
        cy.login('guilherme.lamim96@gmail.com', '123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Guilherme Jackson Lamim')
    });

});

/*
Funcionalidade: US-007 - Tela de Login
Como usuário do conexão QA
Quero fazer login
Para interagir com outrs QAs

Cenário: Fazer login com sucesso
Dado que eu tenho um usuário válido
Quando acesso a tela de Login
E insiro os dados válidos
Então devo exibir uma mensagem de sucesso 

Cenário: Login com usuário ou senha inválida
*/