const {test,expect} = require('@playwright/test');
const {login} = require('../functions/loginData');
const {LoginElements} = require('../pageObjects/loginPageElements.js');
const loginElements = new LoginElements
const loginData = login()

test.beforeEach(async ({page}) => {
  await page.goto('https://app.deel.training/login');
});

test.describe('Test login page', () => {
  test('Check Login Page Elements', async ({page}) => {

    await expect(page.locator(loginElements.emailField())).toBeVisible();
    await expect(page.locator(loginElements.passwdField())).toBeEnabled();

    await expect(page.locator(loginElements.passwdField())).toBeVisible();
    await expect(page.locator(loginElements.passwdField())).toBeEnabled();

    await expect(page.locator(loginElements.btnLogin())).toBeVisible();
    await expect(page.locator(loginElements.btnLogin())).toBeEnabled();

  });

    test('Login Test', async ({page}) => {
    await page.locator(loginElements.emailField()).fill(loginData.email);
    await page.locator(loginElements.passwdField()).fill(loginData.passwd);;
    await Promise.all([
      page.waitForResponse(response =>
          response.status() == 200),
      page.locator(loginElements.btnLogin()).click()
    ]);
  });
});