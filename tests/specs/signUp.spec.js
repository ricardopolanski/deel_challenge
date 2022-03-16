
const {test,expect} = require('@playwright/test');
const {SignUp} = require('../pageObjects/signUpElements.js')
const {clientInfo} =require('../functions/clientInfo.js')
const sign = new SignUp
const client = clientInfo()

test.beforeEach(async ({page}) => {
    await page.goto('https://app.deel.training/signup');
});

test.describe('Test login page', () => {
    test('Check Login Page Elements', async ({
        page
    }) => {
        await page.locator(sign.btnClient()).click();
        await page.locator(sign.btnContinue()).click();
        await page.locator(sign.clientNameField()).fill(client.name);
        await page.locator(sign.clientEmail()).fill(client.email);
        await page.locator(sign.password()).fill(client.password);
        await page.locator(sign.passwordConfirm()).fill(client.password);
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect()).click();
        await page.locator(sign.btnCreate()).click();
    });
});