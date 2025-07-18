class printCategoriesTestActions {

    printCategoriesWomen() {
        cy.contains("strong.title", "New in women's")
            .next("ul.items")
            .find("li.item a")
            .each(($category) => {
                cy.wrap($category).invoke("text").then((categoryName) => {
                    cy.log(`Category: ${categoryName}`);
                });
            });
    }

} export default printCategoriesTestActions