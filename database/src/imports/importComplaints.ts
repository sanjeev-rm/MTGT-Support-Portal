import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MTGT',
  password: 'xe4312',
  port: 5432,
});

export async function importComplaints(): Promise<void> {
  try {
    await client.connect();


    await client.query(`
      CREATE TABLE IF NOT EXISTS complaint (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_code BIGINT NOT NULL REFERENCES users(user_code) ON DELETE CASCADE,
      store_code TEXT NOT NULL,
      type TEXT CHECK (type IN ('EFOS', 'Coverage')) NOT NULL,
      reason TEXT NOT NULL,
      date DATE,
      CONSTRAINT user_store_unique UNIQUE (user_code, store_code));
    `);

    console.log('Complaint table ensured.');
  } catch (err) {
    console.error('Error creating complaint table:', err);
  } finally {
    await client.end();
  }
}
