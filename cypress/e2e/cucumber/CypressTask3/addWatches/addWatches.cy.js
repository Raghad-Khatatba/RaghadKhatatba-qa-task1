import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given("The user navigated to the Magento website", () => {
  cy.visit("https://magento.softwaretestingboard.com/")
})

When("The user hovers on the {string} menu", (menuName) => {
  cy.contains('a', menuName).trigger('mouseover')
})

When("The user selects the {string} option", (option) => {
  cy.contains('a', option).click({ force: true })
})

When("The user changes the view to List", () => {
  cy.get('#mode-list').click()
})

Then("The user adds all watches with a price greater than 55 to the cart", () => {

  cy.get(".product-item-info").each(($el, index) => {
    cy.get(".product-item-info").eq(index).find(".price-wrapper").invoke("text").then((priceText) => {
      const priceNumber = parseFloat(priceText.replace(/[^0-9.]/g, ""));

      if (priceNumber > 55) {
        cy.log(`Adding item with price: $${priceNumber}`);
        cy.get(".product-item-info").eq(index).find("button.tocart").click();
        cy.wait(5000);
        cy.contains("You added", { timeout: 10000 }).should("be.visible");
      }
    });
  })
});
