import puppeteer from "puppeteer";
import fs from "node:fs/promises";
import path from "node:path";

export async function screenshotPost(url, board, rating) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Navigate to the 4chan thread with the specific post
  await page.goto(url, {
    waitUntil: "networkidle2",
  });

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

  // Wait for scrolling animation
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Ensure screenshots directory exists
  const outDir = path.resolve("puppeteer/screenshots");
  await fs.mkdir(outDir, { recursive: true });

  // Take a screenshot of just the post
  const postElement = await page.$(postSelector);
  if (postElement) {
    const filePath = path.join(
      outDir,
      `screenshot_${board}_${rating}_${postId}.png`
    );
    await postElement.screenshot({ path: filePath });
    console.log(`✅ Screenshot saved: ${filePath}`);
  } else {
    console.error("❌ Failed to find post element.");
  }

  await browser.close();
}
