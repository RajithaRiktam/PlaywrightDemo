const { test, expect } = require('@playwright/test')
import { LoginPage } from '../pages/LoginPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';


const records = parse(fs.readFileSync("testdata/TestData.csv"), {
    columns: true,
    skip_empty_lines: true
})

records.forEach((record) => {

    test("using csv file - " + record.id, async ({ page }) => {

        console.log("URL is - " + process.env.URL);
        await page.goto(process.env.URL);
        await page.waitForTimeout(5000);

        const loginpageObj = new LoginPage(page);
        await loginpageObj.goto();
        await loginpageObj.login(record.firstname, record.lastname);
        await page.waitForTimeout(5000);


    })


});



