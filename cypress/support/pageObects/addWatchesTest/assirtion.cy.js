class addWatchesTestAssirtion {
    successMessageShouldAppear() {
        cy.contains("You added", { timeout: 10000 }).should("be.visible");
    }
} export default addWatchesTestAssirtion