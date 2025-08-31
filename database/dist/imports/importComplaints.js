"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importComplaints = importComplaints;
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'MTGT',
    password: 'xe4312',
    port: 5432,
});
function importComplaints() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query(`
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
        }
        catch (err) {
            console.error('Error creating complaint table:', err);
        }
        finally {
            yield client.end();
        }
    });
}
