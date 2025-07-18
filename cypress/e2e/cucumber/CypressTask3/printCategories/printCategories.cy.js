import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import sharedTestActions from '../../../../support/pageObects/sharedTest/action.cy';
import printCategoriesTestActions from '../../../../support/pageObects/printCategoriesTest/actions.cy';

const sharedAction = new sharedTestActions
const printCategoriesActions = new printCategoriesTestActions

Given("The user navigated to the Magento website", () => {
    sharedAction.openHomePage();
})

When("The user clicks on the {string} menu", (option) => {
    sharedAction.clickOnOption(option);
})

Then("The system should print all categories listed under the New In Women's section", () => {
    printCategoriesActions.printCategoriesWomen();
})