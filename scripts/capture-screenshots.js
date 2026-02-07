const puppeteer = require('puppeteer');
const path = require('path');

const sites = [
  { name: 'fine-assets', url: 'https://fineassets.net' },
  { name: 'champions-adaptive-fitness', url: 'https://championsadaptivefitness.com' },
  { name: 'pinnacle-health-choice', url: 'https://pinnaclehealthchoice.com' },
  { name: 'southern-collective-spirit-co', url: 'https://southerncollectivespiritco.com' },
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({ headless: true });

  for (const site of sites) {
    console.log(`Capturing ${site.name}...`);
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });

    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait a bit for any animations to settle
      await new Promise(r => setTimeout(r, 2000));

      // Capture full page screenshot
      await page.screenshot({
        path: path.join(__dirname, '..', 'public', 'screenshots', `${site.name}.png`),
        fullPage: true,
      });

      console.log(`  ✓ Saved ${site.name}.png`);
    } catch (error) {
      console.log(`  ✗ Failed to capture ${site.name}: ${error.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('Done!');
}

captureScreenshots();
