import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import sharedTestActions from '../../../../support/pageObects/sharedTest/action.cy'
import addWatchesTestAction from '../../../../support/pageObects/addWatchesTest/action.cy'
import addWatchesTestAssirtion from '../../../../support/pageObects/addWatchesTest/assirtion.cy'

const sharedAction = new sharedTestActions
const addWatchesAction = new addWatchesTestAction
const addWatchesAssirtion = new addWatchesTestAssirtion

Given("The user navigated to the Magento website", () => {
  sharedAction.openHomePage();
})

When("The user hovers on the {string} menu", (menuName) => {
  sharedAction.hoverOnMenu(menuName)
})

When("The user selects the {string} option", (option) => {
  sharedAction.clickOnOption(option);
})

When("The user changes the view to List", () => {
addWatchesAction.changeViewToList()

})

Then("The user adds all watches with a price greater than 55 to the cart", () => {
  addWatchesAction.addWatchesAbovePrice(() => {
    addWatchesAssirtion.successMessageShouldAppear();
  });
});
