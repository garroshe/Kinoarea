/// <reference types="cypress" />

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("open", () => {
    cy.contains("Зараз у кіно");
  });

  it("redirect to posters when click to all news", () => {
    cy.contains("button", "Всі новинки").click();
    cy.url().should("include", "/posters");
  });

  it("redirect to films when click to card film", () => {
    cy.get('[data-cy="movie-card"]').first().click();
    cy.get('[data-cy="movie-card-btn"]').first().click();
    cy.url().should("include", "/films/");
  });
});
