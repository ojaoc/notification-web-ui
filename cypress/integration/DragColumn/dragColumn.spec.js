/// <reference types="cypress" />
import "@4tw/cypress-drag-drop";
import { When } from "cypress-cucumber-preprocessor/steps";

Given("the user is logged in", function () {
  cy.visit(Cypress.env("appUrl"));
});

When('the user drags the column "Age" to the right', function () {

  cy.clickEdit()
 // cy.findByText(/Age/i).move({ deltaX: 200, deltaY: 0 })
  cy.get('div.example-list').findByText("Age")
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 438, clientY: 87 }, { force: true })
        .trigger('mouseup', { force: true })

  //cy.get('div.example-list').findByRole('div', {name: /Age/i}).move({ deltaX: 200, deltaY: 0 })

  // // //Before Drag and Drop column-a has 'A' and 'column-b' has 'B'
  //  cy.get('#ant-table-row').should("have.text", "Age");
  //  cy.get('#ant-table-row').should("have.text", "Address");

  // // //Drag and drop using cyess-drag-drop plugin
  //  cy.get(/Age/i).drag(/Address/i);

  // // //After Drag and Drop column-a has 'B' and 'column-b' has 'A'
  //  cy.get('#ant-table-row').should("have.text", "Address");
  //  cy.get('#ant-table-row').should('have.text', 'Age')
});
