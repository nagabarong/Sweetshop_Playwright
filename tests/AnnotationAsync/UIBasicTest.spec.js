import {test,expect} from '@playwright/test';

test('Verify Success open page', async ({ page }) => {
    await page.goto('https://sweetshop.netlify.app/');

    await expect(page).toHaveTitle(/Sweet Shop/);
})