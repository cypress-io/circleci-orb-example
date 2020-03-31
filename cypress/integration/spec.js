/// <reference types="cypress" />
describe('Tests using CircleCI Cypress orb', () => {
  it('works', () => {
    cy.visit('index.html')
    cy.contains('Cypress Orb')
  })
})
