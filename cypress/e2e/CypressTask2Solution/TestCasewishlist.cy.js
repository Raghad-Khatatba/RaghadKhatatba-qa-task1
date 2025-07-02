/// <reference types="cypress" />


describe('add the product to the wishlist and take a screenshot for the full page', () => {
    before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains('a', 'Sign In').click()
    cy.LumoLogin('RaghadZKhatatba@gmail.com','Ra@12345')
   
       });
  it('validate that the user can add the product to the wishlist and take a screenshot for the full page', () => {
    cy.get(".product-item").eq(0).click()
    cy.get("#option-label-size-143-item-166").click()
    cy.get("#option-label-color-93-item-50").click()
    cy.contains('Add to Wish List').click()
    cy.contains('Radiant Tee has been added to your Wish List.').should('be.visible');
    cy.screenshot({ capture: 'fullPage' });
  });
});

