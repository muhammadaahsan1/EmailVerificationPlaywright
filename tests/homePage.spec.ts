const{test, expect} = require('@playwright/test');

test('should Have expected Title and URL',async ({page})=>{

    await page.goto('https://demoblaze.com/')

    const pageTitle=await page.title();
    console.log('Page Title is: ',pageTitle);

    await expect(page).toHaveTitle('STORE')

    const pageURL= await page.url();
    console.log('Page URL is: ', pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.close();



})