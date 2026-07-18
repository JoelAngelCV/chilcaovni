const fs = require('fs')
const { Client } = require('pg')

function loadEnv(path) {
  const content = fs.readFileSync(path, 'utf8')
  const lines = content.split(/\r?\n/)
  const env = {}
  for (const l of lines) {
    if (!l || l.trim().startsWith('#')) continue
    const idx = l.indexOf('=')
    if (idx === -1) continue
    const key = l.slice(0, idx).trim()
    const val = l.slice(idx + 1).trim()
    env[key] = val
  }
  return env
}

const env = loadEnv('./.env.local')
const conn = env.DATABASE_URI || process.env.DATABASE_URI
if (!conn) {
  console.error('DATABASE_URI not found in .env.local or environment')
  process.exit(2)
}

async function main() {
  const client = new Client({ connectionString: conn })
  try {
    await client.connect()
    console.log('Connected to DB')
    const q = `SELECT
            con.contype AS constraint_type,
            nsp.nspname AS constraint_schema,
            con.conname AS constraint_name,
            rel.relname AS table_name,
            att.attname AS column_name,
            fnsp.nspname AS foreign_table_schema,
            frel.relname AS foreign_table_name,
            fatt.attname AS foreign_column_name,
            CASE con.confupdtype
              WHEN 'a' THEN 'NO ACTION'
              WHEN 'r' THEN 'RESTRICT'
              WHEN 'n' THEN 'SET NULL'
              WHEN 'c' THEN 'CASCADE'
              WHEN 'd' THEN 'SET DEFAULT'
            END AS update_rule,
            CASE con.confdeltype
              WHEN 'a' THEN 'NO ACTION'
              WHEN 'r' THEN 'RESTRICT'
              WHEN 'n' THEN 'SET NULL'
              WHEN 'c' THEN 'CASCADE'
              WHEN 'd' THEN 'SET DEFAULT'
            END AS delete_rule
          FROM
            pg_catalog.pg_constraint con
            JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid
            JOIN pg_catalog.pg_namespace nsp ON nsp.oid = con.connamespace
            LEFT JOIN pg_catalog.pg_attribute att ON att.attnum = ANY (con.conkey)
              AND att.attrelid = con.conrelid
            LEFT JOIN pg_catalog.pg_class frel ON frel.oid = con.confrelid
            LEFT JOIN pg_catalog.pg_namespace fnsp ON fnsp.oid = frel.relnamespace
            LEFT JOIN pg_catalog.pg_attribute fatt ON fatt.attnum = ANY (con.confkey)
              AND fatt.attrelid = con.confrelid
          WHERE
            nsp.nspname = 'public'
            AND rel.relname = 'media'
            AND con.contype IN ('f');`

    const res = await client.query(q)
    console.log('Query succeeded:', res.rows.length, 'rows')
    console.log(res.rows)
  } catch (err) {
    console.error('Query error:')
    console.error(err)
    process.exitCode = 1
  } finally {
    await client.end().catch(() => {})
  }
}

main()
