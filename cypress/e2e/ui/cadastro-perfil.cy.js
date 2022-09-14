/// <reference types="cypress" />
var faker = require('faker-br')

describe('Funcionalidade: Cadastro do Conexão QA', () => {
    let empresa = faker.company.companyName();
    let address = faker.address.streetAddress();
    let site = 'http://www.ambev.com.br'
    let conhecimento = 'Cypress'
    let github = 'github'
    let bio = 'Sou estudante de Cypress'
    
    beforeEach(() => {
        let name = faker.name.findName();
        let email = faker.internet.email()
        cy.cadastroDeUsuario(name, email)
    });

    it('Criação de perfil com sucesso', () => {
        cy.PrencherFormularioTotalCadastroPerfil(
            empresa,
            site,
            address,
            conhecimento,
            github,
            bio
        )
        cy.get('[data-test="profile-submit"]').click();
        cy.get('[data-test="dashboard-welcome"]').should('be.be.visible')
    });

    it('Criação do perfil com erro', () => {
        cy.PrencherFormularioParcialmente(
            empresa,
            site,
            address,
            github,
            bio
        )
        cy.get('[data-test="profile-submit"]').click();
        cy.get('[data-test="dashboard-welcome"]').should('not.exist')
        cy.get('.MuiFormHelperText-root').should('be.visible')
    });

    it('Mensagem de campo obrigatório', () => {
        cy.PrencherFormularioParcialmente(
            empresa,
            site,
            address,
            github,
            bio
        )
        cy.get('[data-test="profile-submit"]').click();
        cy.get('.MuiFormHelperText-root').should('be.visible')
    });
});