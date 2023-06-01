const pg = require("pg");

const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || "",
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  name: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
