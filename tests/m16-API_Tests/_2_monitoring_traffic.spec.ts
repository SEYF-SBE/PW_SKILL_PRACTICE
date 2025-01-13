import { expect, test } from '@playwright/test';

test('Monitoring HTTP Traffic', async ({ page }) => {

    // page.on('console', msg => {
    //     expect(msg.type()).not.toEqual('error');
    // });

    page.on('request', request => {
        console.log(`>> ${request.method()} ${request.url()}`);
    });

    page.on('response', response => {
        console.log(`<< ${response.status()} ${response.url()}`);
    });

    await page.goto('');
});

test('Testing HTTP', async ({ page }) => {

    page.on('response', response => {
        console.log(`<< The response status is : ${response.status()} `);
        expect.soft(response.status(), `Response with satus ${response.status()} for url: ${response.url()}`).toEqual(200);
    });

    await page.goto('');
});
