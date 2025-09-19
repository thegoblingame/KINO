import { getLongThreads } from "./getLongThreads.js";
import { getPopularPosts } from "./getPopularPosts.js";
import { screenshotPost } from "../puppeteer/screenshotPost.js";

const targetedBoards = process.argv.slice(2);
const longThreads = [];
const popularPosts = [];
// # of replies to the post divided by # of posts in the thread. so lower = better
const targetRating = 25;

for (const board of targetedBoards) {
  longThreads.push(...(await getLongThreads(board)));
}

// console.log(longThreads);

for (const thread of longThreads) {
  await new Promise((res) => setTimeout(res, 1100));

  try {
    const url = `https://a.4cdn.org/${thread.board}/thread/${thread.threadId}.json`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`request failed ${resp.status}, this is the url ${url}`);
    }
    const data = await resp.json();
    popularPosts.push(...getPopularPosts(data.posts, thread, targetRating));
  } catch (error) {
    console.error(error);
  }
}

console.log(popularPosts);

for (const post of popularPosts) {
  await new Promise((res) => setTimeout(res, 1100));
  try {
    const url = `https://boards.4chan.org/${post.board}/thread/${post.threadId}#p${post.ID}`;
    await screenshotPost(url, post.board, post.roughRating);
  } catch (error) {
    console.error(error);
  }
}
