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
// complaint_routes.ts
const koa_router_1 = __importDefault(require("koa-router"));
const data_source_1 = require("../data-source");
const Complaint_1 = require("../entity/Complaint");
const router = new koa_router_1.default({ prefix: '/api' });
router.post('/complaints', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const body = ctx.request.body;
    const { user_code, store_code, type, reason, date } = body;
    if (!user_code || !store_code || !type || !reason || !date) {
        ctx.status = 400;
        ctx.body = { error: 'Missing required fields' };
        return;
    }
    const repo = data_source_1.AppDataSource.getRepository(Complaint_1.Complaint);
    const complaints = yield repo.find({
        where: { user_code, store_code }
    });
    const hasSameDayComplaint = complaints.some(c => {
        const existingDate = new Date(c.date).toDateString();
        const newDate = new Date(date).toDateString();
        return existingDate === newDate;
    });
    if (hasSameDayComplaint) {
        ctx.status = 409;
        ctx.body = { error: 'Complaint already exists for this store on the same day' };
        return;
    }
    const complaint = repo.create({ user_code, store_code, type, reason, date });
    yield repo.save(complaint);
    ctx.status = 201;
    ctx.body = { message: 'Complaint submitted successfully' };
}));
exports.default = router;
//# sourceMappingURL=complaint_routes.js.map