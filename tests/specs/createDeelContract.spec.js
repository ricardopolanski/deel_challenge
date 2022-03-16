
const {generalInfo} = require('../functions/general_Info.js');
const {date} = require('../functions/date.js')
const {test,expect} = require('@playwright/test');
const {ContractElements} = require('../pageObjects/contractPageElements.js');
const contractElements = new ContractElements
const {logon} = require('../functions/login.js');
const info = generalInfo()
const getDate = date()

logon('old')

test.describe('Create Contract', () => {
  test('Create Contract Page Elements', async ({page}) => {
    await page.locator(contractElements.btnCookies()).click();
    await page.locator(contractElements.btnNextPopUp()).click();
    await page.locator(contractElements.btnNextPopUp()).click();
    await page.locator(contractElements.btnNextPopUp()).click();
    await page.locator(contractElements.btnDone()).click();

    await expect(page.locator(contractElements.create())).toBeVisible();
    await expect(page.locator(contractElements.create())).toBeEnabled();
    await page.locator(contractElements.create()).click();

    await expect(page).toHaveURL('https://app.deel.training/create');
    await expect(page.locator(contractElements.fixedRate())).toBeVisible();
    await expect(page.locator(contractElements.fixedRate())).toBeEnabled();
    await page.locator(contractElements.fixedRate()).click();

    await expect(page).toHaveURL('https://app.deel.training/create/fixed');
    await expect(page.locator(contractElements.entityField()).nth(2)).toBeVisible();
    await expect(page.locator(contractElements.entityField()).nth(2)).toBeEnabled();
    await page.locator(contractElements.entityField()).nth(2).click();

    await expect(page.locator(contractElements.entityName())).toBeVisible();
    await expect(page.locator(contractElements.entityName())).toBeEnabled();
    await page.locator(contractElements.entityName()).click();

    await expect(page.locator(contractElements.contractName())).toBeVisible();
    await expect(page.locator(contractElements.contractName())).toBeEnabled();
    await page.locator(contractElements.contractName()).fill(info.contracName);

    await expect(page.locator(contractElements.countryField()).first()).toBeVisible();
    await expect(page.locator(contractElements.countryField()).first()).toBeEnabled();
    await page.locator(contractElements.countryField()).first().click();

    await expect(page.locator(contractElements.countryName(info.country))).toBeVisible();
    await expect(page.locator(contractElements.countryName(info.country))).toBeEnabled();
    await page.locator(contractElements.countryName(info.country)).click();

    await expect(page.locator(contractElements.provinceField())).toBeVisible();
    await expect(page.locator(contractElements.provinceField())).toBeEnabled();
    await page.locator(contractElements.provinceField()).click();

    await expect(page.locator(contractElements.provinceName(info.state))).toBeVisible();
    await expect(page.locator(contractElements.provinceName(info.state))).toBeEnabled();
    await page.locator(contractElements.provinceName(info.state)).click();

    await expect(page.locator(contractElements.jobTitle())).toBeVisible();
    await expect(page.locator(contractElements.jobTitle())).toBeEnabled();
    await page.locator(contractElements.jobTitle()).fill(`${info.jobTitle}`);

    await expect(page.locator(contractElements.seniorityField())).toBeVisible();
    await expect(page.locator(contractElements.seniorityField())).toBeEnabled();
    await page.locator(contractElements.seniorityField()).click();

    await expect(page.locator(contractElements.seniority(info.roleLevel))).toBeVisible();
    await expect(page.locator(contractElements.seniority(info.roleLevel))).toBeEnabled();
    await page.locator(contractElements.seniority(info.roleLevel)).click();

    await expect(page.locator(contractElements.scopeField())).toBeVisible();
    await expect(page.locator(contractElements.scopeField())).toBeEnabled();
    await page.locator(contractElements.scopeField()).fill(`${info.scopeWork}`);

    const date = page.locator(contractElements.todayDay(getDate.month, getDate.day, getDate.year));
    await date.click();
    await page.locator(contractElements.yesterday(getDate.day)).click();
    await page.locator(contractElements.btnNext()).click();
    await page.locator(contractElements.currency()).click();
    await page.locator(contractElements.gbpCurrency()).click();
    await page.locator(contractElements.rate()).fill(info.rate);
    await page.locator(contractElements.paymentMethod()).first().click();
    await page.locator(contractElements.weeklyPayment()).click();
    await expect(page.locator(contractElements.btnNext())).toBeVisible();
    await expect(page.locator(contractElements.btnNext())).toBeEnabled();
    await page.locator(contractElements.btnNext()).click();
    await page.locator(contractElements.btnNext()).click();
    await page.locator(contractElements.btnSpecialClause()).click();
    await page.locator(contractElements.specialClauseField()).fill(info.specialClause);
    await page.locator(contractElements.btnNextspecialClause()).click();
    await Promise.all([
      page.waitForNavigation( /*{ url: 'https://app.deel.training/contract/q73lAQPv' }*/ ),
      page.locator('button:has-text("create contract")').click()
    ]);

  });

});