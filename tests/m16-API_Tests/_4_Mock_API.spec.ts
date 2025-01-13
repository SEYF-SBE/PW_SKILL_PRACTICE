import { test, expect } from '@playwright/test';

// test.use({ javaScriptEnabled: false });

test('Route abort (Mock) - JS Block', async ({ page }) => {

    // to block js files - we can block other files type like : png, jpeg ...
    page.route('**/*.{js}', route => route.abort())

    await page.goto('/savings.html');
    await page.getByTestId('deposit').fill('10');

    await expect(page.getByTestId('result')).not.toBeVisible();
});

test('Route with a condition', async ({ page }) => {

    await page.route('**/*', route => {
        if (route.request().resourceType() === 'script') {
            route.abort();
        } else {
            route.continue();
        }
    })
});

test('Route Fulfill', async({page})=>{

    await page.route('**/*.pdf', route =>{
        route.fulfill({
            status: 404,
            contentType: 'text/plain',
            body: 'Not Found!'
        });
    });

    await page.goto('/savings.html');
    await page.getByText('Download Our Offer').click();

    await page.screenshot({ path: 'route.png'});
    await page.waitForURL('**/*.pdf');

    const bodyPage = page.locator('body')
    await expect(bodyPage).toContainText('Not Found!');
});