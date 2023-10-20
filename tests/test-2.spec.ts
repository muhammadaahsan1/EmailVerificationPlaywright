import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('test light');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await page.getByRole('link', { name: '6V-12V-24V DC Car Circuit Tester Light, TuNan Professional Auto Voltage Continuity Test, Automotive Electrical Volt Test Light/Long Probe for Wire/Fuse/Socket and More - Black' }).click();
  await page.getByLabel('See Similar Items').click();
  await page.locator('#a-autoid-1').getByLabel('Add to Cart').click();
});