import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("The user navigated to the Magento website", () => {
    cy.visit("https://magento.softwaretestingboard.com/")
})

When("The user clicks on the {string} menu", (option) => {
    cy.contains('a', option).click()
})

Then("The system should print all categories listed under the New In Women's section", () => {
    cy.contains("strong.title", "New in women's")
        .next("ul.items")
        .find("li.item a")
        .each(($category) => {
            cy.wrap($category).invoke("text").then((categoryName) => {
                cy.log(`Category: ${categoryName}`);
            });
        });
})