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
    cy.get('[data-cy="movie-card"]', { timeout: 10000 }).first().click();
    cy.get('[data-cy="movie-card-btn"]', { timeout: 10000 }).first().click();
    cy.url().should("include", "/films/");
  });

  it("redirect to news", () => {
    cy.get("a[href='/news']").click();
    cy.url().should("include", "/news");
  });

  it("add trailerID to url params", () => {
    cy.get('[data-cy="slide-in-new-trailer-slide"]', { timeout: 10000 }).first().click();
    cy.location("search").should("include", "trailerId=");
  });
});
