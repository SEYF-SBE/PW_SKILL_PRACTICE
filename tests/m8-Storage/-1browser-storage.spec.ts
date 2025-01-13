import { test, expect } from '@playwright/test'


test('Storage - test from the UI perspective', async ({ page }) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill('Sofia');
    await page.reload();
    await expect(input).toHaveValue('');

    await input.fill('Sofia');
    await page.getByRole('button', {name: 'Save Input'}).click();
    await page.reload();
    await expect(input).toHaveValue('Sofia');

    const storage = await page.context().storageState();
    console.log(storage.cookies);
    console.log(storage.origins[0].localStorage);
});

test('Session (or local) Storage', async ({ page }) => {

    await page.goto('/');

    const input = page.getByLabel('First name');
    await input.fill('Sofia');
    await page.getByRole('button', {name: 'Save Input'}).click();
    
    // pour exécuter un script JS - evaluate()
    const storage = await page.evaluate(() => window.localStorage);
    console.log(storage);

    // clear local storage
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();
    await expect(input).toHaveValue('');

    // set storage 
    await page.evaluate(setLocalStorage);
    await page.reload();
    await expect(input).toHaveValue('Seyf');
});

function setLocalStorage(){
    localStorage.setItem('firstName', 'Seyf');
}