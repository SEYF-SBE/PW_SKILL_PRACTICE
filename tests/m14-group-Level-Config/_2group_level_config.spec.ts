import {Page, test} from '@playwright/test';

test.use({
    actionTimeout: 3000,
    navigationTimeout: 5000,
    launchOptions: {slowMo: 2000, headless: true},
    timezoneId: 'America/New_York'
});

test('Test 1', async ({page}) => {
    await page.goto('');
    const zone = await getTimeZone(page);
    console.log(zone);
});


test.describe('Group Title', () => {

    test.use({
        timezoneId: 'America/Toronto'
    });

    test('Test 2', async ({page}) => {
        await page.goto('');
        const zone = await getTimeZone(page);
        console.log(zone);
    });
})

async function getTimeZone(page: Page){
    return await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone)
}