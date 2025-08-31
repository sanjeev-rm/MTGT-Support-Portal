import * as XLSX from 'xlsx';
import { Client } from 'pg';

const workbook = XLSX.readFile('./Users.xlsx'); 
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data: { UserCode: number; Channel: string }[] = XLSX.utils.sheet_to_json(sheet);

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MTGT',
  password: 'xe4312',
  port: 5432,
});

export async function importUsers(): Promise<void> {
  try {
    await client.connect();

    // Drop table if it exists
    await client.query(`DROP TABLE IF EXISTS users CASCADE;`);

    // Recreate the users table
    await client.query(`
      CREATE TABLE users (
        user_code INTEGER PRIMARY KEY,
        channel TEXT NOT NULL
      );
    `);

    for (const { UserCode, Channel } of data) {
      await client.query(
        'INSERT INTO users (user_code, channel) VALUES ($1, $2)',
        [UserCode, Channel]
      );
    }

    console.log('All users inserted successfully.');
  } catch (err) {
    console.error('Error inserting users:', err);
  } finally {
    await client.end();
  }
}
