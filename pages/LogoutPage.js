const { test, expect } = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));

exports.LogoutPage = class LogoutPage {

    constructor(page) {
        this.page = page;
        this.label = '.text-logo';
        this.logout = page.getByRole('menuitem', { name: 'Logout' });
        this.logo = page.locator('.text-logo');
    }
    async logOut() {

        await this.page.locator('div').filter({ hasText: testData.details.tigersheetLabel }).locator('svg').first().click();
        await this.logout.click();
        await this.page.waitForTimeout(1000);
        const Label = await this.page.locator(this.label).textContent();
        console.log("This is testdata details RTLABEl - ", testData.details.rtLabel);
        expect(Label).toBe(testData.details.rtLabel);


    }
}
