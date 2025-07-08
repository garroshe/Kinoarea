/// <reference types="cypress" />

describe("Error page", () => {
  it("correct redirect", () => {
    cy.visit("/test");
    cy.contains("Можливо, даної адреси сторінки не існує, або сторінку було переміщено.");
    cy.get('[data-cy="error-page-redirect-btn"]').click();
    cy.url().should("include", "/");
  });
});
