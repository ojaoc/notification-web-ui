/// <reference types="cypress" />

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("User visits base route of app", () => {
  cy.visit(Cypress.env("appUrl"));
});

Given("User waits for page load", () => {
  cy.wait(1000);
});

Given("User enables edit mode", () => {
  cy.clickEdit();
});

Given("User opens filter edit modal", () => {
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
  cy.get("div.example-list")
    .children()
    .then((listing) => {
      cy.get("div.ant-modal-body")
        .children()
        .should("have.length", Cypress.$(listing).length);
    });
});

Then("All checkboxes are selected", () => {
  cy.get("span.ant-checkbox-wrapper").each(($el) => {
    cy.wrap($el).invoke("attr", "ng-reflect-model").should("eq", "true");
  });
});
