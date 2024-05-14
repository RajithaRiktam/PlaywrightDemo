const { expect } = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../testdata/TestData.json')));

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.label = '.text-logo';
        this.email = page.getByPlaceholder('Email');
        this.password = '#loginPasswordFld';
        this.signin = '#loginBtn';
    }

    async goto() {
        await this.page.goto('https://riktam.tigersheet.com/home');
        const Label = await this.page.locator(this.label).textContent();
        expect(Label).toBe(testData.details.rtLabel);
    }

    async login(username, password) {
        await this.email.first().fill(username);
        await this.page.locator(this.password).first().fill(password);
        await this.page.locator(this.signin).click();
        this.page.waitForTimeout(1000);
        expect(await this.page.getByRole('heading', { name: testData.details.tigersheetLabel })).toBeVisible();
    }

};