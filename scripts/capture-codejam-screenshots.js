/* eslint-disable */
// Captures a screenshot of each CodeJam 2026 submission in its initial visible
// state. Most submissions wait for an "adStarted" postMessage from the host
// shell before they render anything; prize-combo waits for "adFinished".
// We inject the right event in-page, wait for animations to settle, then snap
// the viewport. Output: public/screenshots/getting-learnt/<slug>.png

const puppeteer = require('puppeteer');
const path = require('path');

const BASE = 'https://codejam26-showcase.vercel.app';

const SUBMISSIONS = [
  { slug: 'cookie-consent',  startEvent: 'adStarted',  waitMs: 4500 },
  // Windows-update has the longest boot sequence: 1800ms delay + 660ms video
  // stutter + 380ms pre-codec wait before the dialog renders.
  { slug: 'windows-update',  startEvent: 'adStarted',  waitMs: 6500 },
  { slug: 'refund-portal',   startEvent: 'adStarted',  waitMs: 2500 },
  { slug: 'loading-bar-liar',startEvent: 'adStarted',  waitMs: 4500 },
  { slug: 'prize-combo',     startEvent: 'adFinished', waitMs: 3000 },
];

async function main() {
  const browser = await puppeteer.launch({ headless: true });

  for (const sub of SUBMISSIONS) {
    const url = `${BASE}/${sub.slug}/submission.html`;
    console.log(`Capturing ${sub.slug} ...`);
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // The submission listens via window.addEventListener('message', ...).
      // Calling window.postMessage from inside the page triggers that listener.
      await page.evaluate((evt) => {
        window.postMessage({ type: evt }, '*');
      }, sub.startEvent);

      // Most boot animations are 1.8s–2.4s; give them a bit more.
      await new Promise((r) => setTimeout(r, sub.waitMs));

      // Force a black background so transparent submissions don't blend with
      // browser default white. The submissions deliberately use a transparent
      // body since the showcase shell sits behind them; here we want them on
      // the dark site palette.
      await page.evaluate(() => {
        document.documentElement.style.background = '#0a0e1a';
        document.body.style.background = '#0a0e1a';
      });

      const out = path.join(__dirname, '..', 'public', 'screenshots', 'getting-learnt', `${sub.slug}.png`);
      await page.screenshot({ path: out, fullPage: false });

      console.log(`  ✓ wrote ${out}`);
    } catch (err) {
      console.error(`  ✗ ${sub.slug} failed:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
