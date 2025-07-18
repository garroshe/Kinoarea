import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});
