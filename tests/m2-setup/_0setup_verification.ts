import { test, chromium } from '@playwright/test';

test('first test verification',async ({}) => {
  const browser = await chromium.launch();  
  await browser.close();
  console.log("we reached this line");
});