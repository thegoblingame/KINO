import { getLongThreads } from "./getLongThreads.js";
import { getPopularPosts } from "./getPopularPosts.js";
import { screenshotPost } from "../puppeteer/screenshotPost.js";

const targetedBoards = ["pol", "v", "tv", "a", "co", "int", "lgbt"];
// const targetedBoards = ["po"];
const longThreads = [];
const popularPosts = [];

for (const board of targetedBoards) {
  longThreads.push(...(await getLongThreads(board)));
}

for (const thread of longThreads) {
  await new Promise((res) => setTimeout(res, 1100));
  const url = `https://a.4cdn.org/${thread.board}/thread/${thread.threadId}.json`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`request failed ${resp.status}, this is the url ${url}`);
  }

  const data = await resp.json();
  popularPosts.push(
    ...getPopularPosts(
      data.posts,
      thread.threadReplyCount,
      thread.board,
      thread.threadId
    )
  );
}

console.log(popularPosts);

for (const post of popularPosts) {
  await new Promise((res) => setTimeout(res, 1100));
  const url = `https://boards.4chan.org/${post.board}/thread/${post.threadId}#p${post.ID}`;
  console.log(url);
  screenshotPost(url);
}
