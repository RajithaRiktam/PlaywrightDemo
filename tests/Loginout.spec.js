import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));


test('Pom test', async ({ page }) => {

    //login
    const loginpageObj = new LoginPage(page);
    await loginpageObj.goto();
    await loginpageObj.login(testData.user.username, testData.user.password);
    await page.waitForTimeout(5000);

    //logout
    const logoutobj = new LogoutPage(page);
    await logoutobj.logOut();

})