import { createPool } from "mysql2/promise";
import { config } from 'dotenv';

config()

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PWORD
})

export { pool }