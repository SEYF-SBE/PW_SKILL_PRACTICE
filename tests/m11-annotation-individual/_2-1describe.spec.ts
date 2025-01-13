import { test, expect } from '@playwright/test';

test.describe('Feature A group', () => {

    test('Test A1', async ({page}) => {

        await page.goto('')
        console.log('Test A1');
    });
    
    test('Test A2', async ({page}) => {
    
        await page.goto('')
        console.log('Test A2');
    });
});

test.describe.skip('Feature B group', () => {

    // skip condition for all group
    test.skip(({browserName}) => browserName === 'chromium', 'This group test is skipped bcz is not valiable for chromium');


    test('Test B1', async ({page}) => {

        await page.goto('')
        console.log('Test B1');
    });
    
    test('Test B2', async ({page}) => {
    
        await page.goto('')
        console.log('Test B2');
    });
});
