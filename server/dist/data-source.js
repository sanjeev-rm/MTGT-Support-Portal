"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// server/data-source.ts
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const StoreAccess_1 = require("./entity/StoreAccess");
const Complaint_1 = require("./entity/Complaint");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "xe4312",
    database: "MTGT",
    synchronize: false, // set to true only in dev (or use migrations)
    logging: true,
    entities: [User_1.User, StoreAccess_1.StoreAccess, Complaint_1.Complaint],
});
//# sourceMappingURL=data-source.js.map