import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://plumlogix.com/');
  await page.getByRole('link', { name: 'Learn More' }).click();
  await page.locator('ss3-force-full-width').getByRole('link', { name: 'Contact Us' }).click();
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your name').click();
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your name').fill('test');
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your name').press('Tab');
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your work email', { exact: true }).fill('testemail.com');
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your work email', { exact: true }).press('Tab');
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your phone number', { exact: true }).fill('+1777777777');
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your company name').click();
  await page.frameLocator('iframe[title="Form 0"]').getByPlaceholder('Enter your company name').fill('plum');
  await page.frameLocator('iframe[title="Form 0"]').getByLabel('Message').click();
  await page.frameLocator('iframe[title="Form 0"]').getByLabel('Message').fill('test');
});