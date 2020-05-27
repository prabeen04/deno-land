import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { config, DotenvConfig } from "https://deno.land/x/dotenv/mod.ts";

type CONFIG = DotenvConfig & {
  host?: string;
  username?: string;
  password?: string;
  database?: string;
  port?: string | number;
}
const DB_CONFIG: DotenvConfig = config({
  path: "db.env"
})
const db = new Database('postgres', {
  host: DB_CONFIG.host,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
});

export async function connectDB() {
  console.log("DB Connected")
  await db.sync({ drop: true })

}