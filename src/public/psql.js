const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'anmon',
    database: 'newstime',
}

const pool = new Pool(config);

module.exports=pool;