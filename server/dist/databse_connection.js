"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connection successful.");
})
    .catch((error) => {
    console.error("Database connection failed:", error);
});
//# sourceMappingURL=databse_connection.js.map