/// <reference types="cypress" />
import "@4tw/cypress-drag-drop";
import { When } from "cypress-cucumber-preprocessor/steps";

Given("the user is logged in", function () {
  cy.visit(Cypress.env("appUrl"));
});

When('the user drags the column "Age" to the right', function () {
  cy.clickEdit();


  cy.get("#ageId").trigger("mousedown", { button: 0 }); // <-- was not working when using which : 1
  cy.wait(500); //not a fan of arbitrary waiting, but this is giving a smooth transition to the drag-and-drop action
  cy.get("#addressId").trigger("mousemove").trigger("mouseleave").click(); // <-- have issues with mouseup. Hence using mouseleave + a dummy action below to finish the drop event.
  // Important: Since mouse leave is not a complete mouse event, had to do some other dummy click to complete the drop part.
  //cy.get("#nameId").click();

  //cy.get('div.example-list').findByRole('div', {name: /Age/i}).move({ deltaX: 200, deltaY: 0 })

  //Before Drag and Drop column-a has 'A' and 'column-b' has 'B'
  //cy.get('#ageId').should("have.text", " Age ");
  //cy.get('#addressId').should("have.text", ' Address ');

  //Drag and drop using cyess-drag-drop plugin
  //cy.get('#ageId').drag('#addressId')

  //Drag and Drop using custom command
  //cy.draganddrop("#ageId > div:nth-child(1)", "#addressId")
  //After Drag and Drop the first item is 'Get to work'
  //cy.get("#addressId > :nth-child(1)").should("have.text", "Age");
});
