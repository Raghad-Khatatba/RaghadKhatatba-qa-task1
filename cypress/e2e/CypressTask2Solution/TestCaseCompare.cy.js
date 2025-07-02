/// <reference types="cypress" />


describe('add the product to the Compare and and record a video for this test case', () => {
    before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");  
       });
  it('validate that the user can add the product to the Compare and record a video for this test case', () => {
    cy.get(".product-item").eq(0).click()
    cy.contains('Add to Compare').click()
    cy.contains('You added product Radiant Tee to the').should('be.visible');
    
  });
});

