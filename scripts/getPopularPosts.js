export function getPopularPosts(posts, thread, targetRating) {
  const allPosts = [];
  const OPRemovedClone = structuredClone(posts);
  OPRemovedClone.shift();
  // map of postId -> number of quote replies
  const quoteCounts = {};

  // initialize counters
  for (const post of OPRemovedClone) {
    quoteCounts[post.no] = 0;
  }

  // regex to match quotelinks like >>12345
  const quoteRegex = /&gt;&gt;(\d+)/g;

  for (const post of OPRemovedClone) {
    if (post.com) {
      let match;
      while ((match = quoteRegex.exec(post.com)) !== null) {
        const quotedId = parseInt(match[1], 10);
        if (quoteCounts.hasOwnProperty(quotedId)) {
          quoteCounts[quotedId]++;
        }
      }
    }
  }
  // current criteria for popular post is that it needs to have at least x% of the thread replying to it

  for (const [ID, postReplyCount] of Object.entries(quoteCounts)) {
    const popularPost = {
      ID: parseInt(ID),
      postReplyCount,
      board: thread.board,
      threadId: thread.threadId,
      // # of replies to the post divided by # of posts in the thread. so lower = better. increment by 1 to avoid dividing by 0
      roughRating: thread.threadReplyCount / postReplyCount + 1,
    };
    // console.log(popularPost);
    allPosts.push(popularPost);
  }
  const popularPosts = allPosts.filter((post) => {
    return post.roughRating < targetRating;
  });
  return popularPosts;
}
