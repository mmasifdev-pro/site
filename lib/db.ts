import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const dbPath = path.join(process.cwd(), "data", "contact.db");
let db: Database | null = null;

function ensureDb() {
  if (db) {
    return db;
  }

  const dataDir = path.dirname(dbPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  db = new Database(dbPath, { fileMustExist: false });
  db.pragma("journal_mode = WAL");
  db.exec(
    `CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT,
      message TEXT NOT NULL,
      need TEXT NOT NULL
    );`
  );

  return db;
}

export function getDb() {
  return ensureDb();
}
