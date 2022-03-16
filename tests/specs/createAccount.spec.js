const {logon} = require('../functions/login.js');
const {test,expect} = require('@playwright/test');

logon()

test.describe('Test login page', () => {
  test('Login Page Elements', async ({page}) => {




    // Click input[name="companyName"]
    await expect(page.locator('[data-qa="companyName"]')).toBeVisible();
    await expect(page.locator('[data-qa="companyName"]')).toBeEnabled();



    // Fill input[name="teamName"]
    await expect(page.locator('[data-qa="teamName"]')).toBeVisible();
    await expect(page.locator('[data-qa="teamName"]')).toBeDisabled();


    await expect(page.locator('text=Anguilla').first()).toBeVisible();
    await expect(page.locator('text=Anguilla').first()).toBeEnabled();

    await expect(page.locator('text=ABC (Anguilla Business Company)')).toBeVisible();
    await expect(page.locator('text=ABC (Anguilla Business Company)')).toBeEnabled();

    await expect(page.locator('input[name="registrationNumber"]')).toBeVisible();
    await expect(page.locator('input[name="registrationNumber"]')).toBeEnabled();

    await page.locator('div:nth-child(6) .deel-ui__input-component__wrapper .deel-ui__input-component .deel-ui__input-component__input').toBeVisible();
    await page.locator('div:nth-child(6) .deel-ui__input-component__wrapper .deel-ui__input-component .deel-ui__input-component__input').toBeEnabled();

    await page.locator('input[name="street"]').toBeVisible();
    await page.locator('input[name="street"]').toBeEnabled();

    await page.locator('input[name="city"]').toBeVisible();
    await page.locator('input[name="city"]').toBeEnabled();


    await page.locator('input[name="zip"]').toBeVisible();
    await page.locator('input[name="zip"]').toBeEnabled();

    
    await page.locator('button:has-text("next")').toBeVisible();
    await page.locator('button:has-text("next")').toBeEnabled();

});

});