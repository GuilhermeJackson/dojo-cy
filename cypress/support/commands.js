// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.visit('login')
    cy.get('[data-test="login-email"]').type(email);
    cy.get('[data-test="login-password"]').type(password);
    cy.get('[data-test="login-submit"]').click();
})

Cypress.Commands.add('cadastroDeUsuario', (name, email) => {
    cy.visit('/cadastrar');
    cy.get('[data-test="register-name"]').type(name)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"]').type('123456')
    cy.get('[data-test="register-password2"]').type('123456')
    cy.get('[data-test="register-submit"]').click();
    cy.get('[data-test="dashboard-noProfile"]').should("be.visible")
})

Cypress.Commands.add('PrencherFormularioTotalCadastroPerfil', (empresa, site, address, conhecimento, github, bio) => {
    cy.get('[data-test="dashboard-createProfile"]').click();
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-4"]').click()
    cy.get('[data-test="profile-company"]').type(empresa)
    cy.get('[data-test="profile-webSite"]').type(site)
    cy.get('[data-test="profile-location"]').type(address)
    cy.get('[data-test="profile-skills"]').type(conhecimento)
    cy.get('[data-test="profile-gitHub"]').type(github)
    cy.get('[data-test="profile-bio"]').type(bio)
})

Cypress.Commands.add('PrencherFormularioParcialmente', (empresa, site, address, github, bio) => {
    cy.get('[data-test="dashboard-createProfile"]').click();
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-4"]').click()
    cy.get('[data-test="profile-company"]').type(empresa)
    cy.get('[data-test="profile-webSite"]').type(site)
    cy.get('[data-test="profile-location"]').type(address)
    cy.get('[data-test="profile-gitHub"]').type(github)
    cy.get('[data-test="profile-bio"]').type(bio)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })