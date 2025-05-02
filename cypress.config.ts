import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "https://rahulshettyacademy.com/AutomationPractice",
        specPattern: "cypress/e2e/tests/**/*.ts",
        supportFile: "cypress/support/e2e.ts"
    },
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "cypress/reports/mochawesome",
        overwrite: false,
        html: true,
        json: true
    },
    video: false,
    screenshotsFolder: "cypress/reports/screenshots"
});
