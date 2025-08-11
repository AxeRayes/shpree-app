import Database from "better-sqlite3";

const db = new Database("db/shpree.db");
db.pragma("journal_mode = WAL");

db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    target REAL NOT NULL,
    last_price REAL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`).run();

export default db;
