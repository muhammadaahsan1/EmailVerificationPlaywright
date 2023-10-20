import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://dagpay.com/');
 
  await page.goto('https://app.dagpay.io/login');
 
  
  
  await page.getByRole('link', { name: 'Email Invoice' }).click();
  
});