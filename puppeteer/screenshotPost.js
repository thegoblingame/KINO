import puppeteer from "puppeteer";

export async function screenshotPost(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate to the 4chan thread with the specific post
  await page.goto(url, { waitUntil: "networkidle2" });

  // Extract the post ID from the URL fragment
  const postId = url.split("#p")[1];

  if (!postId) {
    console.error("Invalid URL: No post ID found.");
    await browser.close();
    return;
  }

  // Wait for the post element to load
  const postSelector = `#p${postId}`;
  await page.waitForSelector(postSelector, { timeout: 5000 });

  // Scroll to the post
  await page.evaluate((selector) => {
    document
      .querySelector(selector)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }, postSelector);

  // Wait for scrolling animation (replaced page.waitForTimeout)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Take a screenshot of just the post
  const postElement = await page.$(postSelector);
  if (postElement) {
    await postElement.screenshot({
      path: `puppeteer/screenshots/screenshot_${postId}.png`,
    });
    console.log(`✅ Screenshot saved: screenshot_${postId}.png`);
  } else {
    console.error("❌ Failed to find post element.");
  }

  await browser.close();
}
