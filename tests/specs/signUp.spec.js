const {test,expect} = require('@playwright/test');
const {SignUp} = require('../pageObjects/signUpElements.js')
const {clientInfo} =require('../functions/clientInfo.js')
const sign = new SignUp
const client = clientInfo()

test.beforeEach(async ({page}) => {
    await page.goto('https://app.deel.training/signup');
    await page.locator(sign.btnClient()).click();
    await page.locator(sign.btnContinue()).click();
});

test.describe('Test signUp Requirements', () => {
    test('Test signUp - Password Unmatch', async ({page}) => {
        await page.locator(sign.clientNameField()).fill(client.name);
        await page.locator(sign.clientEmail()).fill(client.email);
        await page.locator(sign.password()).fill(client.password);
        await page.locator(sign.passwordConfirm()).fill(client.wrongPassword);
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect()).click();
        await page.locator(sign.btnCreate()).click();

        await expect(page.locator(':nth-child(5) > .input-container > .input-container-error')).toBeVisible();
        await expect(page.locator(':nth-child(5) > .input-container > .input-container-error')).toHaveText('Password must match')
    });

    test('Test signUp - Short Password', async ({page}) => {
        await page.locator(sign.clientNameField()).fill(client.name);
        await page.locator(sign.clientEmail()).fill(client.email);
        await page.locator(sign.password()).fill(client.shortPassword);
        await page.locator(sign.passwordConfirm()).fill(client.shortPassword);
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect()).click();
        await page.locator(sign.btnCreate()).click();

        await expect(page.locator(':nth-child(4) > .input-container > .input-container-error')).toBeVisible();
        await expect(page.locator(':nth-child(4) > .input-container > .input-container-error')).toHaveText('Password required to be at least 10 characters long')
    });

    test('Test signUp - email Requirements', async ({page}) => {
        await page.locator(sign.clientNameField()).fill(client.name);
        await page.locator(sign.clientEmail()).fill(client.wrongEmail);      
        await page.locator(sign.password()).fill(client.password);
        await page.locator(sign.passwordConfirm()).fill(client.password);
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect()).click();
        await page.locator(sign.btnCreate()).click();

        await expect(page.locator(':nth-child(3) > .input-container > .input-container-error')).toBeVisible();
        await expect(page.locator(':nth-child(3) > .input-container > .input-container-error')).toHaveText('Invalid email address')
    });
    
    test('SignUp Success', async ({page}) => {
        await page.locator(sign.clientNameField()).fill(client.name);
        await page.locator(sign.clientEmail()).fill('live@live.com');      
        await page.locator(sign.password()).fill('Ricochete123$');
        await page.locator(sign.passwordConfirm()).fill('Ricochete123$');
        await page.locator(sign.hearAboutDeel()).click();
        await page.locator(sign.hearAboutDeelSelect()).click();
        await page.locator(sign.btnCreate()).click();
        await page.goto('https://app.deel.training/create-account/company');
    });
});
