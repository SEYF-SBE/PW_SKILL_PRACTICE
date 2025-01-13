import { chromium, test, devices } from '@playwright/test';

const iPad = devices['iPad Pro 11'];

const slowAndHeadless = {headless: false, slowMo: 2000};

interface Localisation {
    latitude: number;
    longitude: number;
}

const locationCoordinates : Record<string, Localisation> = {
    London: {longitude: -0.118092, latitude: 51.509865},
    Rome: {longitude: 12.4963655, latitude: 41.509865}
};

const london = locationCoordinates['London'];
const rome = locationCoordinates['Rome'];

test('Test 1', async () => {
    
    const browser = await chromium.launch(slowAndHeadless);

    const context = await browser.newContext({
        geolocation: {longitude: london.longitude, latitude: london.latitude}
    });
});

test('Test 2', async () => {
    
    const browser = await chromium.launch(slowAndHeadless);

    const context = await browser.newContext({
        viewport: iPad.viewport,
        userAgent: iPad.userAgent,
        deviceScaleFactor: iPad.deviceScaleFactor,
        locale: 'en_GB',
        geolocation: {longitude: london.longitude, latitude: london.latitude}, 
        permissions: ['geolocation']
    });

    const page = await context.newPage();

    await page.goto('https://maps.google.com');
    await page.getByRole('button', {name: 'Accept all'}).click();
    await page.getByRole('button', {name: 'Stay on web'}).click();
    await page.screenshot({path: 'London-iPad.png'});
});