import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sweetshop.netlify.app/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('bebas@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('sembarang221');
  await page.getByRole('button', { name: 'Login' }).click();


  await expect(
    page.getByText('Welcome')
        .or(page.getByRole('heading', { name: 'Your Account' }))
        .first()
).toBeVisible();
});