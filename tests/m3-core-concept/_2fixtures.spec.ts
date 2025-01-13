import { test, expect } from '@playwright/test'

// using json file to provide data
import { Register_page_loactors } from '../../Resources/Locators/en_locators.json'
import { Register_page_labels } from '../../Resources/Labels/en_labels.json'
import { user } from '../../Resources/Data_user/data.json'


test('Browser support demo', async ({ page }) => {

        await page.goto('https://playwright.dev/');

        console.log('Text content: ', await page.title());

        expect('a').toEqual('a');
        expect(2).toBeLessThan(3);
        expect(null).toBeFalsy();
});

test('other fixtures', async ({ page, browserName, browser, context }) => {

    const page1 = await context.newPage();
    const page2 = await context.newPage();
});

test('Test with simple expect', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    await expect(page).toHaveTitle('Credit Association');
    await expect(page).toHaveURL('http://localhost:3000/');

    const label_firstname = page.locator(Register_page_loactors.firstName_label);
    await expect(label_firstname).toContainText(Register_page_labels.firstName_label);

    const fn_field = page.locator(Register_page_loactors.firstname_field);
    await fn_field.fill(user.firstname);

});