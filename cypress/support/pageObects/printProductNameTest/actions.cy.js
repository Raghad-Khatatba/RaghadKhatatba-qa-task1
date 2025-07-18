class printProductNameTestAction {

    printNameOfProduct() {
        cy.get(".product-item-link").then(($products) => {
            for (let i = 0; i < $products.length; i++) {
                cy.wrap($products[i]).invoke('text').then((productName) => {
                    cy.log(productName)
                })
            }
        })

    }
} export default printProductNameTestAction