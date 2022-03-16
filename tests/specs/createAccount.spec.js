const {logon} = require('../functions/login.js');
const {test,expect} = require('@playwright/test');

logon("new")

test.describe('Test login page', () => {
  test('Login Page Elements', async ({page}) => {


    await page.locator('#CybotCookiebotDialogBodyButtonAccept').click();

    await expect(page.locator('[data-qa="companyName"]')).toBeVisible();
    await expect(page.locator('[data-qa="companyName"]')).toBeEnabled();
    await page.locator('[data-qa="companyName"]').fill('Testing Name');
    await expect(page.locator('[data-qa="companyName"]')).toHaveValue('Testing Name')

   
    await expect(page.locator('[data-qa="teamName"]')).toBeVisible();
    await expect(page.locator('[data-qa="teamName"]')).toBeEnabled();
    await expect(page.locator('[data-qa="teamName"]')).toBeEmpty();


    await expect(page.locator('.deel-ui__select__value-container').first()).toBeVisible();
    await expect(page.locator('.deel-ui__select__value-container').first()).toBeEnabled();
    await page.locator('.deel-ui__select__control').first().click();
    await page.locator('#react-select-2-option-28 >> text=Brazil').click();

    await expect(page.locator('input[name="registrationNumber"]')).toBeVisible();
    await expect(page.locator('input[name="registrationNumber"]')).toBeEnabled();

    await expect(page.locator('div:nth-child(7) .deel-ui__input-component__wrapper .deel-ui__input-component .deel-ui__input-component__input')).toBeVisible();
    await expect(page.locator('div:nth-child(7) .deel-ui__input-component__wrapper .deel-ui__input-component .deel-ui__input-component__input')).toBeEnabled();

    await expect(page.locator('input[name="street"]')).toBeVisible();
    await expect(page.locator('input[name="street"]')).toBeEnabled();

    await expect(page.locator('input[name="city"]')).toBeVisible();
    await expect(page.locator('input[name="city"]')).toBeEnabled();


    await expect(page.locator('input[name="zip"]')).toBeVisible();
    await expect(page.locator('input[name="zip"]')).toBeEnabled();

    
    await expect(page.locator('button:has-text("next")')).toBeVisible();
    await expect(page.locator('button:has-text("next")')).toBeEnabled();

});

});