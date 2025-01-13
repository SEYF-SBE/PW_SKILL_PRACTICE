import { test, expect } from '@playwright/test'


test('Download a Single file and assert', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', {name: 'Register'}).click();

    const s: Promise<Buffer> = page.screenshot({
        path: '././test-results/screenshots/screenshot.png'
    });

    page.screenshot({
        path: '././test-results/screenshots/screenshot-advenced.png',
        fullPage: true,
        mask: await page.getByTestId('location').all()
    });

    await expect(page.locator('.invalid-feedback')).toHaveCount(4); // correct is 3

});