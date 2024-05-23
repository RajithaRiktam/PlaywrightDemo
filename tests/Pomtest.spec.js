import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { HomePage } from '../pages/HomePage';
import { TimesheetPage } from '../pages/TimesheetPage';

const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));
let page;

//login
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const loginpageObj = new LoginPage(page);
    await loginpageObj.goto();
    await loginpageObj.login(testData.user.username, testData.user.password);
    await page.waitForTimeout(5000);
})


//logout
test.afterAll(async () => {
    const logoutobj = new LogoutPage(page);
    await logoutobj.logOut();
})

//Verify tigersheet search
test('Pom test', async () => {
    const HomePageobj = new HomePage(page);
    await HomePageobj.gotoTimesheet();
    const TimesheetPageObj = new TimesheetPage(page);
    await TimesheetPageObj.searchName(testData.user.name);
    await TimesheetPageObj.clickDashboard();


})