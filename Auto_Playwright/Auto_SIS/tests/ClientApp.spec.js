const { test, expect } = require('@playwright/test');

test('Client App Login', async({page}) =>
{
    const registerButton = page.locator(".login-wrapper-footer-text");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName"); 
    const userEmail = page.locator("#userEmail");
    const userMobile = page.locator("#userMobile"); 
    const occupation = page.locator(".custom-select");
    const genderCheck = page.locator("[type='radio'][value='Male']");
    const userPassword = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const checkBoxOver18Years = page.locator("[type='checkbox']");
    const register = page.locator("#login");
    const registerSuccessScreen = page.locator(".login-wrapper");
    const loginButton = page.locator(".btn");
    await page.goto("https://rahulshettyacademy.com/client");
    await registerButton.click();
    await firstName.fill("Khanh");
    await lastName.fill("Nguyen");
    await userEmail.fill("gk@gmail.com");
    await userMobile.fill("987654321");
    await occupation.click();
    await page.locator(".custom-select").filter({ hasText: "Student" }).click();
    await genderCheck.click();
    await userPassword.fill("12345KhanH&");
    await confirmPassword.fill("12345KhanH&");
    await checkBoxOver18Years.click();
    await register.click();
    await expect(registerSuccessScreen).toBeVisible();
    await loginButton.click();
})