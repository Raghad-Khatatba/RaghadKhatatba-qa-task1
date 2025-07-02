/// <reference types="cypress" />


describe('Submit a review on the product page', () => {
    before(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
    });
  it('Validate that the user can submit a review on the product page', () => {
     cy.get(".product-item").eq(0).click()
     cy.get('#tab-label-reviews-title').click()
     cy.get('#Rating_1_label').click()
     cy.get('#nickname_field').type("Raghad")
     cy.get('#summary_field').type("Not great")
     cy.get('#review_field').type("Not great - buttons are too small and hurt my fingers trying to button it. I've seen better designs..")
     cy.contains('button', 'Submit Review').click()
     cy.get('[data-ui-id="message-success"]').should('be.visible').and('contain', 'You submitted your review for moderation.');
  });
});

