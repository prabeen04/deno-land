import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('postgres', {
  host: 'localhost',
  username: 'deno',
  password: 'deno',
  database: 'deno',
});
