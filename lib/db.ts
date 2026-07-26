import postgres from "postgres";

// Reuse a single connection across invocations where possible (serverless-friendly).
// `postgres` handles pooling/connection reuse internally.
declare global {
  // eslint-disable-next-line no-var
  var __pgSql: ReturnType<typeof postgres> | undefined;
}

function ensureDb() {
  if (global.__pgSql) {
    return global.__pgSql;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  const sql = postgres(connectionString, {
    // Most hosted Postgres (Neon, Supabase, RDS, etc.) require SSL.
    ssl: "require",
    max: 1, // safe default for serverless — avoid exhausting connection limits
  });

  global.__pgSql = sql;
  return sql;
}

export function getDb() {
  return ensureDb();
}

// Run once at startup / first call to make sure the table exists.
// Safe to call repeatedly — CREATE TABLE IF NOT EXISTS is idempotent.
export async function ensureSchema() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT,
      message TEXT NOT NULL,
      need TEXT NOT NULL
    );
  `;
}

export type NewSubmission = {
  name: string;
  email: string;
  organization?: string | null;
  message: string;
  need: string;
};

export async function insertSubmission(data: NewSubmission) {
  const sql = getDb();
  await ensureSchema();

  const [row] = await sql`
    INSERT INTO submissions (name, email, organization, message, need)
    VALUES (${data.name}, ${data.email}, ${data.organization ?? null}, ${data.message}, ${data.need})
    RETURNING id, created_at;
  `;

  return row;
}
