# Project Description
This project is an end-to-end test automation framework built using Cypress, TypeScript, and Mocha. It is designed to automate UI testing of web applications with a focus on scalability, maintainability, and clear reporting. The integration of TypeScript ensures strong typing and better developer tooling, while Mocha provides a structured testing syntax for organizing test suites and hooks.

#  Key Features:
TypeScript Support for type safety and modern development features

Cypress for fast, reliable, and flake-free browser-based testing

Mocha as the test runner for BDD-style structuring (describe, it, before, after)

Mochawesome Reporting for detailed HTML and JSON test reports

Page Object Model (POM) design pattern to promote reusable and maintainable code

CI Integration Ready (e.g., GitLab CI/CD, GitHub Actions)

Support for API testing with request methods (GET, POST, PUT, PATCH, DELETE)

# Folder Structure:

cypress/

├── e2e/ 

        ├── pages/
    
        ├── tests/

├── support/           

├── fixtures/          

├── reports/ 

        ├── mochawesome/

        ├── screenshots/

├── utils/

├── videos/

# Getting Started
Prerequisites:
Node.js (v16+ recommended)

npm

Installation:

 Clone the repository

git clone https://github.com/your-username/your-project.git
cd your-project


# Install dependencies

npm install

# Run Tests:

Run tests in headless mode with mochawesome reporting

> npm run test

Open Cypress test runner

> npm run cy:open

Generate HTML Report:

> npm run generate-report

Run Full Test + Report:

> npm run cy:report