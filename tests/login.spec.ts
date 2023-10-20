import {test, expect, Page, Browser, chromium} from "@playwright/test";
import { mailHelper } from "./mail.Helper";


let page: Page;
let browser: Browser


test.beforeAll(async () => {
    browser = await chromium.launch({ chromiumSandbox: false });
    const context = await browser.newContext();
    page= await context.newPage();


});

test.afterAll(async () => {
   
    await browser.close();
});

test.describe.serial ('Sign In Test', async() =>{
const userEmail = 'hassangillani3@gmail.com'
const userPassword= 'Ayub$abir1234567'

test('Enter a registered email and password', async ()=>{ 
await page.goto("https://app.dagpay.io/login", {waitUntil: "networkidle"});
await expect(page).toHaveURL(/.*login/);
await page.locator("input[name='email']").fill(userEmail);
await page.locator ("input[name='password']").fill(userPassword);
const submitButton = page.locator("#login"); 
await expect(submitButton).toBeVisible();
await Promise.all([

page.waitForResponse((resp) => resp.url().includes("api/authentication/login") && resp.status() === 403), 
submitButton.click()
]);

await expect (page.locator("input[name='loginCode']")).toBeVisible();
// At this point user is on verification code entry page, now user needs to read their gmail email and get the verification code from there 
// Its giving html of the email

});

test('Enter the verification code received in the email',  async ()=>{
    const submitButton = page.locator("#login");
    const emailHTML = await mailHelper.readEmail(page,
        "support@dagpay.io",
        userEmail, 
        "Login verification required"
        );
    const verificationCodeFromEmail = await mailHelper.extractVerificationCode(emailHTML);
    console.log("data", verificationCodeFromEmail)
    await Promise.all([

        page.waitForResponse( (resp) => resp.url().includes ("api/authentication/login") && resp.status() === 200), 
        page.locator("input[name='loginCode']").fill(String(verificationCodeFromEmail)), 
       
        submitButton.click()
    ]);
    await expect (page).toHaveURL (/.*dashboard/);
    await page.waitForTimeout(30000000);
   
});

});
