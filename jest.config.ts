import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/shared/config/setupTests.ts"],
};

export default config;
