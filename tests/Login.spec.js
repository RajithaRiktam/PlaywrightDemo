const { test, expect } = require('@playwright/test')
test('Login test', async ({ page }) => {

    await page.goto('https://riktam.tigersheet.com/home');
    // await page.waitForTimeout(5000)
    const text = await page.locator('.text-logo').textContent();
    console.log("Label is : " + text);
    expect(text).toBe('Riktam Technologies')
    await page.waitForTimeout(3000);
    await page.getByRole('textbox',{name:'Email'}).fill('rajitha@riktamtech.com')
    await page.getByRole('textbox',{name:'Password'}).fill('Rajitha123')
    await page.locator('#loginBtn').click();
    await expect(page.getByRole('heading', { name: 'Tigersheet' })).toBeVisible();

   
    await page.locator('div').filter({ hasText: /^Tigersheet$/ }).locator('svg').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await expect(page.getByText('Riktam Technologies')).toBeVisible();

})