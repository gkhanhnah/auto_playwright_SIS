const { test, expect } = require('@playwright/test');

test ('Browser basic test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
});


test ('Page basic test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/practice');

    await page.locator('#username').fill('Username');
    await page.locator('#password').fill('Password');
    await page.locator('#signInBtn').click();
});