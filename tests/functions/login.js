const {login} = require('./loginData.js');
const {LoginElements} = require('../pageObjects/loginPageElements.js');
const loginElements = new LoginElements
const loginData = login()
const {test} = require('@playwright/test');

function logon(){

      
      test.beforeEach(async ({page}) => {
        await page.goto('https://app.deel.training/login');    
        await page.locator(loginElements.emailField()).fill(loginData.email);
        await page.locator(loginElements.passwdField()).fill(loginData.passwd);
        await Promise.all([
          page.waitForNavigation({
            url: 'https://app.deel.training/'
          }),
          page.locator(loginElements.btnLogin()).click()
      
        ]);
      });
}

module.exports = {logon}