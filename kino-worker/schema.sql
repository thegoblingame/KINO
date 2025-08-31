-- screenshots table = your canonical index
create table if not exists screenshots (
  id integer primary key autoincrement,
  board text not null,                 -- e.g. 'g'
  tid integer not null,                -- thread id
  pid integer not null,                -- post id
  replies integer not null default 0,  -- quote_count/backlinks or reply count you track
  score real,                          -- optional ranking metric
  r2_key text not null unique,         -- path in r2 (or cdn-relative key)
  width integer,
  height integer,
  created_at integer not null default (unixepoch()),  -- upload time (seconds)
  post_time integer,                   -- original post unix time (optional)
  meta json                            -- future-proof: arbitrary extras
);

-- natural uniqueness for a post screenshot
create unique index if not exists screenshots_board_tid_pid
  on screenshots(board, tid, pid);

-- fast “latest” queries
create index if not exists screenshots_created_idx
  on screenshots(created_at desc);

-- common filter
create index if not exists screenshots_board_created_idx
  on screenshots(board, created_at desc);
