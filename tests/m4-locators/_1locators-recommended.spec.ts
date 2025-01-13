import { test, expect } from '@playwright/test'

const homeTitle = 'Credit Association'
const savingsTitle = 'Save with us'

test('locators demo', async ({ page }) => {

    await page.goto('');
    // const firstname = page.getByLabel('First name');
    // await firstname.fill('seyf');
    // await firstname.clear();

    // await page.getByRole('button', {name: 'Register', exact: true}).click();

    // const warningawait = page.getByText('Valid first name is required');
    // await expect(warningawait).toBeVisible();

    await page.locator('ul li').getByRole('link', {name: 'Saving'}).click();

    const rows = page.getByRole('row').filter({hasText: 'Competition'}).getByRole('cell').nth(2);

    console.log(await rows.textContent());

    page.close();
});

test('checkbox and text area', async ({ page }) => {
    await page.goto('/');
    await page.check('#heard-about', {force: true});
    await page.fill('#textarea', 'So i was thinkin the other day ... ');
});

test('Back, forward, reload test', async ({ page }) => {
    await page.goto('/');
    await page.goto('/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);
});

test('Navigation test', async ({ page }) => {
    await page.goto('/', {waitUntil: 'load', timeout: 5000});
    await expect(page).toHaveTitle(homeTitle);
});

test('Select dropdown test', async ({ page }) => {
    await page.goto('/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    const deposit = page.getByTestId('deposit');
    const period = page.locator('#period');
    const result = page.locator('#result'); 

    await deposit.fill('100');
    await period.selectOption({index:1});

    await expect(result).toContainText('After 1 Year you will earn $5.00 on your deposit');
});