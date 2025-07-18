class sharedTestActions {

    openHomePage() {
        cy.visit("https://magento.softwaretestingboard.com/");
        return this;
    }

    clickOnOption(option) {
        cy.contains('a', option).click({ force: true });
    }

    hoverOnMenu(menuName) {
        cy.contains('a', menuName).trigger('mouseover');
    }
}
export default sharedTestActions;