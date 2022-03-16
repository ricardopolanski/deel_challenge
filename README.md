[![Playwright Tests](https://github.com/ricardopolanski/deel_challenge/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/ricardopolanski/deel_challenge/actions/workflows/playwright.yml)

To execute all tests with Allure Report
npx playwright test --reporter=line,allure-playwright

To create Allure results
npx allure generate .\allure-results\ --clean

To open Allure Reports
npx allure open ..\allure-report\
