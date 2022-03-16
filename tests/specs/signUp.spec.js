const {test,expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('https://app.deel.training/signup');
});

test.describe('Test login page', () => {
  test('Check Login Page Elements', async ({page}) => {


  // Go to https://app.deel.training/signup
  await page.goto('https://app.deel.training/signup');
  // Click button:has-text("As a clientI want to pay my contractors/employees")
  await page.locator('button:has-text("As a clientI want to pay my contractors/employees")').click();
  // Click button:has-text("continue")
  await page.locator('button:has-text("continue")').click();
  // Click input[name="name"]
  await page.locator('input[name="name"]').click();
  // Click [placeholder="example\@example\.com"]
  await page.locator('[placeholder="example\\@example\\.com"]').click();
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Click input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').click();
  // Click .select__value-container
  await page.locator('.select__value-container').click();
  // Click #react-select-2-option-1
  await page.locator('#react-select-2-option-1').click();
    // Click button:has-text("create your deel account")
    await page.locator('button:has-text("create your deel account")').click();

  });

 


});