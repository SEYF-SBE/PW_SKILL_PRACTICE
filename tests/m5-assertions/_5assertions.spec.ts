import { test, expect } from '@playwright/test'

const homeTitle = 'Credit Association'
const savingsTitle = 'Save with us'

test('check test', async({ page }) => {
    await page.goto('/');
    await expect.soft(page).toHaveTitle(homeTitle);

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'Recommended by a friend';

    await expect.soft(textarea).toBeDisabled();
    await expect.soft(textarea).toBeEmpty();

    await checkbox.check();
    await expect.soft(textarea).toBeEnabled();

    await textarea.fill(message);
    await expect.soft(textarea).toHaveValue(message);

    await page.getByRole('button', {name: 'Register'}).click();

    const feedback = page.locator('.invalid-feedback');
    await expect.soft(feedback).toHaveCount(3);

    for(const message of await feedback.all()){
        await expect.soft(message).toBeVisible();
    }

    await expect.soft(feedback.first()).toContainText('Valid first name is required');
});