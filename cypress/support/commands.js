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
  cy.get("i.anticon-edit").click();
});

Cypress.Commands.add("clickFilter", () => {
  cy.get("i.anticon-filter").click();
});

Cypress.Commands.add("clickSave", () => {
  cy.get("i.anticon-save").click();
});

Cypress.Commands.add("clickDiscard", () => {
  cy.get("i.anticon-delete").click();
});

//For Cypress drag and drop custom command
Cypress.Commands.add('draganddrop', (dragSelector, dropSelector) => {
  cy.get(dragSelector).should('exist')
      .get(dropSelector).should('exist');

  const draggable = Cypress.$(dragSelector)[0]; // Pick up this
  const droppable = Cypress.$(dropSelector)[0]; // Drop over this

  const coords = droppable.getBoundingClientRect()
  draggable.dispatchEvent(new MouseEvent('mousedown'));
  draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
  draggable.dispatchEvent(new MouseEvent('mousemove', {
      clientX: coords.left + 10,
      clientY: coords.top + 10  // A few extra pixels to get the ordering right
  }));
  draggable.dispatchEvent(new MouseEvent('mouseup'));
  return cy.get(dropSelector);
})
