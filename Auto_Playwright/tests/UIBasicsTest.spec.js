const { test, expect } = require('@playwright/test');

test ('Browser basic test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
});


test ('Page basic test', async ({ page }) => {
    await page.goto('https://www.google.com');
});