/// <reference types="cypress" />

describe('Funcionalidade: Cadastrar experiencia com sucesso', () => {
    let token
    let aux = `conta mais ${Math.random() * 100000}`
    beforeEach(() => {
        cy.token().then((tkn) => {
            token = tkn
        })
    })
    it('Deve criar uma nova experiencia para o usuario com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: 'api/profile/experience',
            headers: {
                Cookie: token
            },
            body: {
                "title": "PAPAPA",
                "company": "TETETE",
                "from": "2022-09-15",
            },
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.experience[0].title).equal("PAPAPA")
            expect(response.body.experience[0].company).equal("TETETE")
        })
    });

    it('Deve carregar nova experiencia para o usuario com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'api/profile/user/631b7d285410550015ac6d2d',
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.user.name).equal("Guilherme Jackson Lamim")
        })
    });
});