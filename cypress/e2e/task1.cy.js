/// <reference types="cypress" />


describe('Find the best selectors for all elements in Conduit', () => {
  it('best selector for elements', () => {
    // Visit the Conduit registration page
    cy.visit("https://demo.productionready.io/#/register")
    // Select the conduit link navbar logo
    cy.get(".navbar-brand")
    // select the Sign up title
    cy.contains('h1', 'Sign up')
    // selectr the home link
    cy.get('ul[show-authed="false"] a.nav-link').first()
    // selector the Sign up link
    cy.get('ul[show-authed="false"] a.nav-link').eq(2)
    // selector the "Have an account ?" login link
    cy.get("p.text-xs-center a")
    // Select the form input fields
    cy.get(".form-group").eq(0) // Username
    cy.get(".form-group").eq(1) // Email
    cy.get(".form-group").last() // Password

    //select the Sign up button
    cy.contains('button', 'Sign up')
    //select the conduit logo
    cy.get(".logo-font")
    // select the span 
    cy.get("span")
  });
});

