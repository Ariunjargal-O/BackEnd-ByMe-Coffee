"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankCardRouter = void 0;
const express_1 = __importDefault(require("express"));
const BankCard_1 = require("../conroller/BankCard");
const Checking_1 = require("../middleware/Checking");
exports.bankCardRouter = express_1.default.Router();
exports.bankCardRouter
    .post("/create/:userId", Checking_1.checkUserId, BankCard_1.postBankCardUserId)
    .get("/:userId", Checking_1.checkUserId, BankCard_1.getBankCardUserId)
    .patch("/:bankCardId", Checking_1.checkBankCardId, BankCard_1.patchBankCard);
//# sourceMappingURL=BankCard.js.map