// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "@testing-library/cypress/add-commands";
import '@4tw/cypress-drag-drop';

Cypress.Commands.add("clickEdit", () => {
  return cy.get("i.anticon-edit").click();
});

Cypress.Commands.add("clickFilter", () => {
  return cy.get("i.anticon-filter").click();
});

Cypress.Commands.add("clickSave", () => {
  return cy.get("i.anticon-save").click();
});

Cypress.Commands.add("clickDiscard", () => {
  return cy.get("i.anticon-delete").click();
});

//For Cypress drag and drop custom command
Cypress.Commands.add('dragToElement', (dragSelector, dropSelector) => {
  cy.get(dragSelector).should('exist')
      .get(dropSelector).should('exist');

  cy.get(dragSelector)
      .trigger("mousedown", { button: 0 });
  cy.get(dropSelector)
      .trigger("mousemove")
      .trigger("mouseleave").click();

  return cy.get(dropSelector);
})

Cypress.Commands.add('dragTableHeader', (headerName, destHeaderName) => {

  return cy.dragToElement(
      `[col-id=${headerName}] nz-list-header`,
      `[col-id=${destHeaderName}] nz-list-header`
  );
})

Cypress.Commands.add('getTableColumnByPosition', (pos) => {
  return cy.get(`#cdk-drop-list-0 div:nth-child(${pos}) div[col-id]`);
})
