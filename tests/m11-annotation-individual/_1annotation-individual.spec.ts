import { test, expect } from '@playwright/test';

// test.skip();

test.skip('will not run', async () => {

    console.log('This should not be printed');
});

test('Skip (un)conditionally', async ({page, browserName}) => {

    test.skip(browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123');

    test.skip(await page.getByTestId('someId').count() === 0, 'Skinpping because a least 1 element X must be present');
});

test.fixme('Fixme', async () => {
    // le test doit etre corriger et il est sauté lors du lancement du test - skip
});

test('Will fail', async () => {

    test.fail(); // test SHOULD be fail

    expect(2).toEqual(3); // correct bcz should be fail1
});