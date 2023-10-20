import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
//   const alpha = await page.locator("div.a-cardui-header h2:has-text('Refresh your space')").textContent();
//await expect
  await expect(page.locator('//h2[text()="Refresh your space"]')).toHaveText('Refresh your space');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('test light');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await page.getByRole('link', { name: '6V-12V-24V DC Car Circuit Tester Light, TuNan Professional Auto Voltage Continuity Test, Automotive Electrical Volt Test Light/Long Probe for Wire/Fuse/Socket and More - Black' }).click();
  
  await page.waitForTimeout(5000); 
  

  
});