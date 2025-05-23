const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cineva',
    password: 'postgres',
    port: 5433,
});

module.exports = pool;
