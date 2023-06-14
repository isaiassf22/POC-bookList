import pg from 'pg';
var Pool = pg.Pool;
var database = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'caneta',
    database: 'test02'
});
export default database;
