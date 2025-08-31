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
const koa_router_1 = __importDefault(require("koa-router"));
const data_source_1 = require("../data-source");
const User_1 = require("../entity/User");
const StoreAccess_1 = require("../entity/StoreAccess");
const router = new koa_router_1.default({
    prefix: '/api'
});
console.log('Setting up user routes...');
router.get('/users', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Hit /api/users route');
    ctx.body = "hello user";
}));
router.get('/users/:userCode', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Hit /api/users/:userCode route');
    const userCode = Number(ctx.params.userCode);
    const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
    const user = yield userRepo.findOneBy({ user_code: userCode });
    if (!user) {
        ctx.status = 404;
        ctx.body = { error: 'User not found' };
        return;
    }
    ctx.body = { user_code: user.user_code, channel: user.channel };
}));
router.get('/users/:userCode/stores', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Hit /api/users/:userCode/stores route');
    const userCode = Number(ctx.params.userCode);
    const accessRepo = data_source_1.AppDataSource.getRepository(StoreAccess_1.StoreAccess);
    const accesses = yield accessRepo.find({ where: { user_code: userCode } });
    ctx.body = accesses;
}));
console.log('User routes configured');
exports.default = router;
//# sourceMappingURL=user_routes.js.map