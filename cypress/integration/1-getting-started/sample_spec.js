describe('My first test', function () {
    it('Clicks an element', function () {
        cy.visit('https://example.cypress.io')

        cy.pause()
        
        cy.contains('type').click()

        cy.url()
        .should('include', '/commands/actions')

        cy.get('.action-email')
        .type('faka@email.com')
        .should('have.value', 'faka@email.com')
    })
})