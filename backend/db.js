import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

import { Pool } from 'pg';

console.log('Connecting with credentials:', {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl:{
    rejectUnauthorized: false,
  }
});

// Test the connection (for development)
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
    } else {
      console.log('Connected to PostgreSQL at:', res.rows[0].now);
    }
  });

export default pool;
