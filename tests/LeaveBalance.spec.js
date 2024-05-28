import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LeavesPage } from '../pages/LeavesPage';
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));


test('Check Leave balance', async ({ page }) => {

    const loginpageObj = new LoginPage(page);
    await loginpageObj.goto();
    await loginpageObj.login(testData.user.username, testData.user.password);
    await page.waitForTimeout(5000);

    const HPObj = new HomePage(page);
    await HPObj.gotoLeaves();
    const LPObj = new LeavesPage(page);
    await LPObj.SearchLeaveBalance("Leave Balance 2024", "Rajitha", "Leave Balance 20243 hidden");
    await LPObj.SearchLeaveBalance("Leave Balance 2023", "Rajitha", /^Leave Balance 20233 hidden fieldsFilterGroupSortColorHeightBulk Email$/);
    await LPObj.SearchLeaveBalance("Leave Balance 2022", "Rajitha", /^Leave Balance 20223 hidden fieldsFilterGroupSortColorHeightBulk Email$/);


})