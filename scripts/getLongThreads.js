export async function getLongThreads(targetBoard) {
  await new Promise((res) => setTimeout(res, 1100));

  const url = `https://a.4cdn.org/${targetBoard}/threads.json`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`request failed ${resp.status}`);
  }

  const data = await resp.json();

  // threads.json is an array of pages, each with a .threads array
  const longThreads = [];

  for (const page of data) {
    for (const thread of page.threads) {
      if (thread.replies > 100) {
        longThreads.push({
          board: targetBoard,
          threadId: thread.no,
          threadReplyCount: thread.replies,
        });
      }
    }
  }

  // console.log("threads with >100 replies:", longThreads);
  return longThreads;
}
