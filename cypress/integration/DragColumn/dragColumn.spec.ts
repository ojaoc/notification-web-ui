import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("the user visits the page", () => {
  cy.visit(Cypress.env("appUrl"));
});

Given('the table is in edit mode', () => {
  cy.clickEdit();
});

Given('the {word} column is in position {int}', (col: string, pos: number) => {
  cy.getTableColumnByPosition(pos)
    .should('have.attr', 'col-id', col);
});

When('the user drags the {word} column to the {word} column', (srcColumn, destColumn) => {
  cy.dragTableHeader(srcColumn, destColumn);
});

Then('the {word} column should be in position {int}', (col: string, pos: number) => {
  cy.getTableColumnByPosition(pos)
    .should('have.attr', 'col-id', col);
});

