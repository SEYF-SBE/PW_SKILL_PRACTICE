import { test, expect } from '@playwright/test';

test.beforeAll('All', ()=>{

    console.log('Before All Tests');
});

test.beforeEach('Mani', async({page})=>{

    console.log('Before each Test');
    await page.goto('');
});

test('Test A1', async ({page}) => {

    console.log('Test A1');
});

test('Test A2', async ({page}) => {

    console.log('Test A2');
});

test.afterEach('founction to teardown test', async({page})=>{
    console.log('After each Test');
    await page.close();
});

test.afterAll('All', ()=>{

    console.log('After All Tests');
});

