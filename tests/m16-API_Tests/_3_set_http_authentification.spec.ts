import { expect, test } from "@playwright/test";

const REPO = 'Playwright-Test-Repo-From-PWVSCODE';

test.use({
    baseURL: 'https://api.github.com/',
   //ajouter le header ici
})

test.beforeEach('Create repo', async ({ request }) => {
    const response = await request.post('user/repos', { 
        // data:{
        //     "user":{
        //         "email": "ajouter",
        //         "password": "ajouter"
        //     }
        // }
        data:{
            name: REPO
        }
    });

    expect(response.ok()).toBeTruthy();
});

test('Work with newly created repo', async ({ page }) => {

    await page.goto('******?tab=repositories');

    await expect(page.getByRole('link', {name: REPO})).toHaveCount(1); // pour savoir si le repo exist et que il y a 1 seul

    await page.reload();



});

test.afterEach('Delete repo', async ({ request }) => {
    const response = await request.delete(`/repos/***/${REPO}`);

    //expect.soft(response.ok()).toBeTruthy();
    expect(response.status() === 204);
});