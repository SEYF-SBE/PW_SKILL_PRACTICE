import { test, expect } from '@playwright/test'
import fs from 'fs';

test('Download a Single file and assert', async ({ page }) => {

    await page.goto('/savings.html');

    const downloadPromise = page.waitForEvent('download');

    await page.getByText('Download Our Offer').click();

    const download = await downloadPromise; // config le fichier playwright.config user : headless: false ; il faut désactiver le headless

    const suggestedFileName = download.suggestedFilename();
    const filepath = 'donwload/' + suggestedFileName;
    await download.saveAs(filepath);

    expect(await download.failure()).toBeNull();

    expect(fs.existsSync(filepath)).toBeTruthy();

    const filesizeinBytes = fs.statSync(filepath).size;
    console.log(filesizeinBytes);
    expect(filesizeinBytes).toBeLessThan(20_000);

});

test('Upload a Single file and assert', async ({ page }) => {

    await page.goto('/loans.html');

    const uploadInput = page.locator('intput[type="file"]');

    // signle file '' - multiple file : ['', '']
    await uploadInput.setInputFiles('../../Resources/files/pdf1.pdf');

    // clear 
    await uploadInput.setInputFiles([])
});
