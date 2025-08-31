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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const user_routes_1 = __importDefault(require("./routes/user_routes"));
const complaint_routes_1 = __importDefault(require("./routes/complaint_routes"));
const data_source_1 = require("./data-source");
const app = new koa_1.default();
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
    app.use((0, cors_1.default)({ origin: '*', credentials: true }));
    app.use((0, koa_bodyparser_1.default)());
    app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`REQUEST RECEIVED: ${ctx.method} ${ctx.path}`);
        yield next();
        console.log(`SENDING RESPONSE: ${ctx.status}`);
    }));
    app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (ctx.path === '/') {
            ctx.body = { message: 'Home works!', path: ctx.path };
        }
        else if (ctx.path === '/test') {
            ctx.body = { message: 'Test works!', path: ctx.path };
        }
        else {
            yield next();
        }
    }));
    console.log('Registering user routes...');
    app.use(user_routes_1.default.routes());
    app.use(user_routes_1.default.allowedMethods());
    app.use(complaint_routes_1.default.routes());
    app.use(complaint_routes_1.default.allowedMethods());
    app.use((ctx) => __awaiter(void 0, void 0, void 0, function* () {
        ctx.status = 404;
        ctx.body = { error: 'Route not found', path: ctx.path };
    }));
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
exports.default = app;
//# sourceMappingURL=app.js.map