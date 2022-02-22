

describe('partugal language header menu', function () {
//TODO move to fixture if possible 
     Cypress.on('uncaught:exception', (err, runnable) => {
       //TODO check that only the acceptable errors are skipped (__tfcapi etc.)
        return false
        });

    it('Checks if all 4 elements in the header menu and 3 eleents in the category menu are in partugal', function () {
        cy.visit(Cypress.env('partugal').page)

        cy.get('#menu-item-1819').should('have.text', Cypress.env('partugal').header_menu_1)
        cy.get('#menu-item-1818').should('have.text', Cypress.env('partugal').header_menu_2)
        cy.get('#menu-item-1820').should('have.text', Cypress.env('partugal').header_menu_3)
        cy.get('#menu-item-9785').should('have.text', Cypress.env('partugal').header_menu_4)
        cy.get('#menu-item-1248').should('have.text', Cypress.env('partugal').category_menu_1)
        cy.get('#menu-item-1246').should('have.text', Cypress.env('partugal').category_menu_2)
        cy.get('#menu-item-6313').should('have.text', Cypress.env('partugal').category_menu_3)
        
    })
})


