import { test as setup} from '@playwright/test';

setup.use({});

setup('do setup', async ({ page }) => {
    console.log('Setup');
})