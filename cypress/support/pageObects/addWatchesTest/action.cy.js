class addWatchesTestAction {

    changeViewToList() {
        cy.get('#mode-list').click();
    }
    addWatchesAbovePrice(onSuccess) {
        cy.get(".product-item-info").each(($el, index) => {
            cy.get(".product-item-info").eq(index).find(".price-wrapper").invoke("text").then((priceText) => {
                const priceNumber = parseFloat(priceText.replace(/[^0-9.]/g, ""));

                if (priceNumber > 55) {
                    cy.log(`Adding item with price: $${priceNumber}`);
                    cy.get(".product-item-info").eq(index).find("button.tocart").click();
                    cy.wait(5000);
                    onSuccess();
                }
            });
        })

    }
} export default addWatchesTestAction