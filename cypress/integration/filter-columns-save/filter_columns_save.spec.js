/// <reference types="cypress" />

import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("User enables edit mode", () => {
  cy.clickEdit();
});

When("User opens filter edit modal", () => {
  cy.clickFilter();
});

Then("Modal opens", () => {
  cy.get("div.ant-modal-content")
    .should("have.css", "background-color")
    .and("eq", "rgb(255, 255, 255)");

  cy.get("i.anticon-close").should("be.visible");

  cy.contains("OK");
  cy.contains("Cancelar");
});

Then("Modal shows correct number of columns", () => {
  const numCols = cy.get("div.example-list").children().length;
  cy.get("div.ant-modal-body").children().should("have.length", numCols);
});

Then("All checkboxes are selected", () => {
  cy.get("div.ant-modal-body input").each(($el) => {
    $el.invoke("prop", "ng-reflect-model").should("eq", "true");
  });
});

When('User deselects option labeled "Age"', () => {
  cy.findByText("Age").click();
});
