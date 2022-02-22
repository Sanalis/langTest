

beforeEach(() => {
    cy.fixture('/aisad-ob-ge').as('ge')
  })

describe('German language header menu', function () {
//TODO move to fixture if possible 
     Cypress.on('uncaught:exception', (err, runnable) => {
       //TODO check that only the acceptable errors are skipped (__tfcapi etc.)
        return false
        });

    it('Checks if all 4 elements in the header menu are in German', function () {
        cy.visit(`${this.ge}`)

        cy.get('#menu-item-1819').should('have.text', 'Haftungsausschluss')
        cy.get('#menu-item-1818').should('have.text', 'Datenschutzbestimmungen')
        cy.get('#menu-item-1820').should('have.text', 'Werben sie mit uns')
        cy.get('#menu-item-9785').should('have.text', 'Impressum')
        
    })
})


