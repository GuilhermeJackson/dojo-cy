/// <reference types="cypress" />

describe('Funcionalidade: Cadastrar usuario com sucesso', () => {
        it('Deve criar usuario com sucesso', () => {
        let email = `guilherme${Math.random() * 100000}@dojo.com`
        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Guilherme",
                "email": email,
                "password": "123456"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
        })
    });
});