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
const importStoreAccess_1 = require("./imports/importStoreAccess");
const importUsers_1 = require("./imports/importUsers");
const importComplaints_1 = require("./imports/importComplaints");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, importUsers_1.importUsers)();
        yield (0, importStoreAccess_1.importStoreAccess)();
        yield (0, importComplaints_1.importComplaints)();
    });
}
main();
