import {Given , Then} from 'cypress-cucumber-preprocessor/steps'

Given ("The user navigated to magento website", ()=>{
cy.visit("https://magento.softwaretestingboard.com/")
})

Then ("The products should be available in hot seller section", ()=>{
cy.get(".product-item-link").then(($products)=>{
    for (let i = 0; i < $products.length; i++) {
    cy.wrap($products[i]).invoke('text').then((productName)=>{
        cy.log(productName)
    })
}
})


})