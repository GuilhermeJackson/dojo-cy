/// <reference types="cypress" />
describe('Funcionalidade: Login - API', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "guilherme.lamim96@gmail.com",
                "password": "123456"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).be.lte(3000) //performance
        })
    });

    it('Deve validar mensagem de erro quando inserir dados inválidos', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "inexistente@gmail.com",
                "password": "teste@123"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.errors[0].msg).to.equal('Credenciais inválidas')
        })
    });

});