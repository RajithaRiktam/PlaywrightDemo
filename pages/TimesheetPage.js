const { expect } = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));

exports.TimesheetPage = class TimesheetPage {

    constructor(page) {
        this.page = page;
        this.label = 'Find in entire sheet';
        this.dashboard = 'Dashboard';
        this.searchButton = '(//*[name()="svg"][@stroke="currentColor"])[14]';
    }


    async searchName(name) {
        //"timesheetForm":"TimesheetForm - New EntryHide fieldsFilterGroupSortColorHeightBulk Email",
        // await this.page.locator('div').filter({ hasText: testData.details.timesheetForm }).getByRole('button').nth(2).click();
        await this.page.locator(this.searchButton).click();
        await this.page.getByLabel(this.label).click();
        await this.page.getByLabel(this.label).fill(name);
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(3000);
        let ele = await this.page.locator('a').first().textContent();
        console.log(ele);
        expect(ele).toContain(name);
    }

    async clickDashboard() {
        await this.page.getByText(this.dashboard).click();
        await this.page.waitForTimeout(3000);
        expect(await this.page.getByRole('button', { name: testData.details.addWidget }).textContent()).toBe(testData.details.addWidget);
    }
};