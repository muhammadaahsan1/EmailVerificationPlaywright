import { test, expect } from '@playwright/test';

test('should upload File', async ({ page }) => {
 
 
 await page.goto('https://www.csm-testcenter.org/');
 

 await page.locator('//a[text()="File Upload"]').click();
  
  // Click input[name="file-upload"]
//   await page.locator('(//input[@name="file_upload"])[1]').click();

  // Upload fixture.pdf
  await page.locator('(//input[@name="file_upload"])[1]').setInputFiles('fixture.pdf');

  // Click text=fixture.pdf
  
  await page.waitForTimeout(5000); 

});