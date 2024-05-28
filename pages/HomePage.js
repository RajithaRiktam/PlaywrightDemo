const { test, expect } = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.leaves=this.page.getByText('airplanemode_active');

    }
    async gotoTimesheet() {
        await this.page.getByRole('menuitem', { name: testData.details.timesheet }).locator('span').click();
        await this.page.waitForTimeout(2000);
    }

    async gotoLeaves() {
        await this.leaves.click();
        await this.page.waitForTimeout(2000);
    }
}
