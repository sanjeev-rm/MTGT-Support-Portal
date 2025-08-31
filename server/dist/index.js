"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
const PORT = 3000;
console.log('Starting application...');
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database initialized successfully');
    const server = app_1.default.listen(PORT, () => {
        console.log(`✅ Server is running at http://localhost:${PORT}`);
        console.log(`✅ Process ID: ${process.pid}`);
        console.log(`✅ Node.js version: ${process.version}`);
    });
    server.on('error', (error) => {
        console.error('❌ Server error:', error);
    });
})
    .catch((error) => {
    console.error('❌ Error during Data Source initialization:', error);
    process.exit(1);
});
// Add process error handlers
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
//# sourceMappingURL=index.js.map