"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.importStoreAccess = importStoreAccess;
const XLSX = __importStar(require("xlsx"));
const pg_1 = require("pg");
const path = __importStar(require("path"));
const workbook = XLSX.readFile(path.join(__dirname, '../../StoreAccess.xlsx'));
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);
const client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'MTGT',
    password: 'xe4312',
    port: 5432,
});
function importStoreAccess() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            // Drop table if it exists
            yield client.query(`DROP TABLE IF EXISTS store_access CASCADE;`);
            // Create table
            yield client.query(`
      CREATE TABLE store_access (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        type TEXT,
        user_code BIGINT REFERENCES users(user_code),
        store_code TEXT NOT NULL,
        week_off TEXT,
        d21 INTEGER, d22 INTEGER, d23 INTEGER, d24 INTEGER, d25 INTEGER,
        d26 INTEGER, d27 INTEGER, d28 INTEGER, d29 INTEGER, d30 INTEGER,
        d31 INTEGER, d1 INTEGER, d2 INTEGER, d3 INTEGER, d4 INTEGER, d5 INTEGER,
        d6 INTEGER, d7 INTEGER, d8 INTEGER, d9 INTEGER, d10 INTEGER,
        d11 INTEGER, d12 INTEGER, d13 INTEGER, d14 INTEGER, d15 INTEGER,
        d16 INTEGER, d17 INTEGER, d18 INTEGER, d19 INTEGER, d20 INTEGER
      );
    `);
            for (const row of data) {
                const values = [
                    row.Type,
                    row.UserCode,
                    row.StoreCode,
                    row.WeekOff,
                    row.D21, row.D22, row.D23, row.D24, row.D25,
                    row.D26, row.D27, row.D28, row.D29, row.D30,
                    row.D31, row.D1, row.D2, row.D3, row.D4, row.D5,
                    row.D6, row.D7, row.D8, row.D9, row.D10,
                    row.D11, row.D12, row.D13, row.D14, row.D15,
                    row.D16, row.D17, row.D18, row.D19, row.D20
                ];
                yield client.query(`INSERT INTO store_access (
          type, user_code, store_code, week_off,
          d21, d22, d23, d24, d25,
          d26, d27, d28, d29, d30,
          d31, d1, d2, d3, d4, d5,
          d6, d7, d8, d9, d10,
          d11, d12, d13, d14, d15,
          d16, d17, d18, d19, d20
        ) VALUES (
          ${Array(35).fill(0).map((_, i) => `$${i + 1}`).join(', ')}
        );`, values);
            }
            console.log('Store access data inserted successfully.');
        }
        catch (err) {
            console.error('Error inserting store access:', err);
        }
        finally {
            yield client.end();
        }
    });
}
