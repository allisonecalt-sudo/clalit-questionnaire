const { test, expect } = require('@playwright/test');

const APP_URL = 'https://allisonecalt-sudo.github.io/clalit-questionnaire/';

test('page loads successfully', async ({ page }) => {
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  const title = await page.title();
  console.log('Title:', title);
  expect(title).not.toBe('Site not found · GitHub Pages');
});

test('no console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  console.log('Errors:', errors.length ? errors : 'None');
  expect(errors).toHaveLength(0);
});

test('parents under 3 tab has content', async ({ page }) => {
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  // Click the under-3 parents tab
  await page.click('text=שאלון הורים עד גיל 3');
  await page.waitForTimeout(1000);
  // Check container is visible
  const container = page.locator('#parentsUnder3');
  await expect(container).toBeVisible();
  // Check sections exist
  const sections = container.locator('.section');
  const count = await sections.count();
  console.log('Sections found:', count);
  expect(count).toBeGreaterThanOrEqual(10);
  // Check dynamic items rendered
  const dailyHTML = await page.locator('#pu3-daily-items').innerHTML();
  console.log('Daily items HTML length:', dailyHTML.length);
  console.log('Daily items HTML preview:', dailyHTML.substring(0, 200));
  const dailyRadios = container.locator('#pu3-daily-items input[type="radio"]');
  const dailyCount = await dailyRadios.count();
  console.log('Daily radios:', dailyCount);
  // Check ALL radios in the container
  const allRadios = container.locator('input[type="radio"]');
  const allRadioCount = await allRadios.count();
  console.log('All radios in container:', allRadioCount);
  // Check if any JS errors in page context
  const jsCheck = await page.evaluate(() => {
    return {
      dailyEl: !!document.getElementById('pu3-daily-items'),
      dailyChildren: document.getElementById('pu3-daily-items')?.children?.length,
      dailyInner: document.getElementById('pu3-daily-items')?.innerHTML?.length,
    };
  });
  console.log('JS check:', JSON.stringify(jsCheck));
  expect(jsCheck.dailyChildren).toBeGreaterThan(0);
});
