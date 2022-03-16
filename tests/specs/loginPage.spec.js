const {test,expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('https://app.deel.training/login');
});

test.describe('Test login page', () => {
  test('Check Login Page Elements', async ({page}) => {

    await expect(page.locator('[placeholder="Type\\ your\\ email"]')).toBeVisible();
    await expect(page.locator('[placeholder="Type\\ your\\ email"]')).toBeEnabled();

    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeEnabled();

    await expect(page.locator('[data-qa="log-in"]')).toBeVisible();
    await expect(page.locator('[data-qa="log-in"]')).toBeEnabled();

  });

    test('Login Test', async ({page}) => {

    // Fill [placeholder="Type\ your\ email"]
    await page.locator('[placeholder="Type\\ your\\ email"]').fill('rpolanski@live.com');

    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill('Testdeel123$');

    // Click form button:has-text("log in")
    await Promise.all([
      page.waitForResponse(response =>
          response.status() == 200),
      page.locator('form button:has-text("log in")').click()
      
      
      
    ]);
    

  });



});