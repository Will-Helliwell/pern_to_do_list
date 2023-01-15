const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'willhelliwell',
  database: 'pern_to_do_list',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
