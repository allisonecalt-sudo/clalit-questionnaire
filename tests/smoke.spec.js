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
  const dailyItems = container.locator('#pu3-daily-items .scale-row');
  const dailyCount = await dailyItems.count();
  console.log('Daily items:', dailyCount);
  expect(dailyCount).toBeGreaterThanOrEqual(7);
  // Check radio buttons exist
  const radios = container.locator('input[type="radio"]');
  const radioCount = await radios.count();
  console.log('Radio buttons:', radioCount);
  expect(radioCount).toBeGreaterThan(50);
  // Screenshot for visual check
  await page.screenshot({ path: 'tests/under3-screenshot.png', fullPage: true });
});
