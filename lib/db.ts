import { Pool, QueryResult} from "pg";

export async function getPool(): Promise<Pool>{
const pool = new Pool ({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DBNAME,
    port: parseInt(process.env.PG_PORT!),
    // user: "postgres",
    // password: "1111",
    // host: "localhost",
    // database: "strings",
    // port: 5432,
})

return pool;
}

export default async function sql(query: string, values?: Array<any>): Promise<QueryResult<any>>{

    const pool = await getPool();
    const result = await pool.query(query, values);

    return result;

}