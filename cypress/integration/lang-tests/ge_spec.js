describe('German language', function () {
    it('Clicks an element', function () {
        cy.visit('https://playsstar.com/worldwide/aisad-ob-ge')

       // cy.pause()
        
        //cy.contains('type').click()

        //cy.url()
      //  .should('include', '/commands/actions') //*[@id="menu-item-1818"]

        cy.get('//*[@id="menu-item-1818"]')
            .should('have.value', 'Datenschutzbestimmungen')
    })
})