Feature: Add specific watches to cart from Gear section

  Scenario: Add all watches with price greater than 55 to cart
    Given The user navigated to the Magento website
    When The user hovers on the "Gear" menu
    And The user selects the "Watches" option
    And The user changes the view to List
    Then The user adds all watches with a price greater than 55 to the cart