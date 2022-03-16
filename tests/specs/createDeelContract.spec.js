
//const {login} = require('./loginData.js');
const {generalInfo} = require('../functions/general_Info.js');
const {date} = require('../functions/date.js')
const {test,expect} = require('@playwright/test');
//const {LoginElements} = require('./pageObjects/loginPageElements.js');
const {ContractElements} = require('../pageObjects/contractPageElements.js');
//const loginElements = new LoginElements
const contractElements = new ContractElements
const {logon} = require('../functions/login.js');

//const loginData = login()
const info = generalInfo()
const getDate = date()


/* test.beforeEach(async ({page}) => {
  await page.goto('https://app.deel.training/login');
}); */
logon()

test.describe('Create Contract', () => {
  test('Create Contract Page Elements', async ({page}) => {
    /* await page.locator(loginElements.emailField()).fill(loginData.email);
    await page.locator(loginElements.passwdField()).fill(loginData.passwd);
    await Promise.all([
      page.waitForNavigation({
        url: 'https://app.deel.training/'
      }),
      page.locator(loginElements.btnLogin()).click()

    ]); */
    await page.locator(contractElements.create()).click();
    await expect(page).toHaveURL('https://app.deel.training/create');
    await page.locator(contractElements.fixedRate()).click();
    await expect(page).toHaveURL('https://app.deel.training/create/fixed');
    await page.locator(contractElements.btnCookies()).click();
    await page.locator(contractElements.entityField()).nth(2).click();
    await page.locator(contractElements.entityName()).click();
    await page.locator(contractElements.contractName()).fill(info.contracName);
    await page.locator(contractElements.countryField()).first().click();
    await page.locator(contractElements.countryName(info.country)).click();
    await page.locator(contractElements.provinceField()).click();
    await page.locator(contractElements.provinceName(info.state)).click();
    await page.locator(contractElements.jobTitle()).fill(`${info.jobTitle}`);
    await page.locator(contractElements.seniorityField()).click();
    await page.locator(contractElements.seniority(info.roleLevel)).click();
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