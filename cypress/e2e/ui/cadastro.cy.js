/// <reference types="cypress" />
var faker = require('faker-br')

describe('Funcionalidade: Cadastro do Conexão QA', () => {
    beforeEach(() => {
        cy.viewport(1400,700)
        cy.visit('/cadastrar');
    });

    it('Deve fazer cadastro com sucesso', () => {
        let email = faker.internet.email()
        let name = faker.name.findName();

        cy.get('[data-test="register-name"]').type(name)
        cy.get('[data-test="register-email"]').type(email)
        cy.get('[data-test="register-password"]').type('123456')
        cy.get('[data-test="register-password2"]').type('123456')
        cy.get('[data-test="register-submit"]').click();
        cy.get('[data-test="dashboard-noProfile"]').should("be.visible")
    });
});