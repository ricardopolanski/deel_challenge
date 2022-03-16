
const {test,expect} = require('@playwright/test');
const {SignUp} = require('../pageObjects/signUpElements.js')
const sign = new SignUp

test.beforeEach(async ({page}) => {
    await page.goto('https://app.deel.training/signup');
});

test.describe('Test login page', () => {
    test('Check Login Page Elements', async ({
        page
    }) => {

        await page.goto('https://app.deel.training/signup');
        await page.locator(sign.btnClient()).click();
        await page.locator(sign.btnContinue()).click();
        await page.locator(sign.clientNameField()).click();
        await page.locator(sign.clientEmail()).click();
        await page.locator(sign.password()).click();
        await page.locator(sign.passwordConfirm()).click();
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect).click();
        await page.locator(sign.btnCreate()).click();
    });
});