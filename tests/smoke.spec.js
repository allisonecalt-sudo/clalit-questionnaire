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
  // Open the under-3 parents form through the picker
  await page.click('.pick-btn:has-text("הורים")');
  await page.click('.pick-btn:has-text("עד 3")');
  await page.click('.pick-card:has-text("שאלון הורים — ילד עד גיל 3")');
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

test('every form in the picker opens', async ({ page }) => {
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  const cards = page.locator('.pick-card');
  const n = await cards.count();
  expect(n).toBeGreaterThanOrEqual(10);
  for (let i = 0; i < n; i++) {
    await page.click('#navPicker');
    await cards.nth(i).click();
    const open = page.locator('.container:not(.hidden) form');
    await expect(open).toBeVisible();
    await expect(page.locator('.container:not(.hidden) .btn-claude')).toHaveCount(1);
  }
});

test('ganenet/rav 3-6 form matches the paper item counts', async ({ page }) => {
  await page.goto(APP_URL + '#ganRav36', { waitUntil: 'networkidle' });
  const rows = (id) => page.locator(`#${id} .question-row`).count();
  expect(await rows('gr36-sensory-items')).toBe(8);
  expect(await rows('gr36-movement-items')).toBe(6);
  expect(await rows('gr36-fine-motor-items')).toBe(7);
  expect(await rows('gr36-social-items')).toBe(8);
  expect(await rows('gr36-language-items')).toBe(15);
  expect(await rows('gr36-attention-items')).toBe(18);
});

test('parents over 3 form matches the paper item counts', async ({ page }) => {
  await page.goto(APP_URL + '#parentsOver3', { waitUntil: 'networkidle' });
  const rows = (id) => page.locator(`#${id} .question-row`).count();
  expect(await rows('po3-sensory1-items')).toBe(5);
  expect(await page.locator('#po3-sensory1-items input[type="checkbox"]').count()).toBe(20);
  expect(await rows('po3-gross-items')).toBe(7);
  expect(await rows('po3-fine-items')).toBe(8);
  expect(await rows('po3-social-items')).toBe(8);
  expect(await rows('po3-language-items')).toBe(12);
  expect(await rows('po3-pronun-items')).toBe(5);
  expect(await rows('po3-attention-items')).toBe(18);
  await expect(page.locator('#parentsOver3')).toContainText('מהם הציפיות שלכם מהאבחון');
});
