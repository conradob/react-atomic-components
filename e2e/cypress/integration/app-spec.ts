// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('App', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('renders the app', function () {
    cy.get('p').should('contain', 'Omnipresent Frontend Challenge');
    cy.get('a').should('contain', 'React issues');
  });
});
