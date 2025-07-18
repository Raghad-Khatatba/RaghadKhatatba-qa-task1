import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import sharedTestActions from '../../../../support/pageObects/sharedTest/action.cy'
import printProductNameTestAction from '../../../../support/pageObects/printProductNameTest/actions.cy'


const sharedAction = new sharedTestActions
const printProductNameAction = new printProductNameTestAction

Given("The user navigated to magento website", () => {
    sharedAction.openHomePage();
})

Then("The products should be available in hot seller section", () => {
    printProductNameAction.printNameOfProduct();
})