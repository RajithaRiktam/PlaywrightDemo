const { test, expect } = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));

exports.LeavesPage = class LeavesPage {

    constructor(page) {
        this.page = page;
        this.leaves = this.page.getByText('airplanemode_active');
        this.searchBox = this.page.getByRole('textbox');
        this.sheet = this.page.getByLabel('Find in entire sheet');

    }
    async SearchLeaveBalance(Year, Name, Balance) {

        var year = Year;
        await this.page.waitForTimeout(2000);
        await this.page.getByText(Year).click();

        if (year.includes("2023") || Year.includes("2022")) {
            await this.page.locator('div').filter({ hasText: Balance }).getByRole('button').nth(2).click();
            await this.searchBox.fill(Name);
            await this.searchBox.press('Enter');
        }
        else {
            await this.page.getByRole('tabpanel').locator('div').filter({ hasText: Balance }).getByRole('button').nth(2).click();
            await this.sheet.fill(Name);
            await this.sheet.press('Enter');
        }

        await expect(this.page.getByRole('gridcell', { name: Name }).locator('div').first()).toBeVisible();
    }
}
