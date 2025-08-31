You can just put the post number in the URL and when you load the thread, your browser will scroll down to that specific post

If you query a board for all the threads, it will list them in bump order

Hit endpoint for a board => Collect numbered IDs for all threads in a board => Filter out all threads with less than 100 replies => For each thread remaining, hit endpoint for individual threads => For each thread in the list, parse JSON for any post with x => 20 quote links or more, => run Puppeteer script, with board thread ID and post ID => save image to DB with metadata containing board thread ID and post ID =>

Frontend loads every object from DB and displays

AFTER MVP

resort based on algo?

set cors on r2/worker to allow your origin.

For each board, we get all of the threads currently in the catalog. For each of those threads, we check the number of replies. If it has over 100 replies and it is not already in an array of threads that contains threads that have already been processed, add it to an array of threads that need to be processed. Then, for the threads that need to be processed, for each individual thread, make an API call to the individual thread endpoint. For that thread, go and get every single post number. For each post number, check to see how many times that post number appears in the overall object. If that post number appears x equals 20 times or more, push it to the array of viral posts. Finally, for the array of viral posts, run the Puppeteer script on each post. Puppeteer script will also upload screenshots to database.
MVP

Clone Next.js repo. Set up new repo on local.

Set up R2 database or whatever it's called on CloudFlare. Check to see if we can get the metadata we want. Look at Gladiator database for reference.

Run the Puppeteer script a few times. Get some screenshots. Upload them to the database.

DETERMINE HOW WE GET FROM DBYou can just put the post number in the URL and when you load the thread, your browser will scroll down to that specific post

If you query a board for all the threads, it will list them in bump order

Hit endpoint for a board => Collect numbered IDs for all threads in a board => Filter out all threads with less than 100 replies => For each thread remaining, hit endpoint for individual threads => For each thread in the list, parse JSON for any post with x => 20 quote links or more, => run Puppeteer script, with board thread ID and post ID => save image to DB with metadata containing board thread ID and post ID =>

Frontend loads every object from DB and displays

AFTER MVP

resort based on algo?

set cors on r2/worker to allow your origin.

For each board, we get all of the threads currently in the catalog. For each of those threads, we check the number of replies. If it has over 100 replies, Then, for the threads that need to be processed, for each individual thread, make an API call to the individual thread endpoint. For that thread, go and get every single post number. For each post number, check to see how many times that post number appears in the overall object. If that post number appears x equals 20 times or more, push it to the array of viral posts. Finally, for the array of viral posts, run the Puppeteer script on each post. Puppeteer script will uploAD rscreenshots to database.
MVP

Clone Next.js repo. Set up new repo on local.

Set up R2 database or whatever it's called on CloudFlare. Check to see if we can get the metadata we want. Look at Gladiator database for reference.

Run the Puppeteer script a few times. Get some screenshots. Upload them to the database.

DETERMINE HOW WE GET FROM DB
