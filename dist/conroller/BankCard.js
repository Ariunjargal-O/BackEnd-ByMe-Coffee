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
exports.patchBankCard = exports.getBankCardUserId = exports.postBankCardUserId = exports.postBankCard = void 0;
const connection_1 = __importDefault(require("../utils/connection"));
const postBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cardNumber, cardHolderName, expirationDate, cvv, userId } = req.body;
        const createdBankCard = yield (0, connection_1.default) `insert into "bankCard" (cardNumber, cardHolderName, expirationDate, cvv, userId) values (${cardNumber}, ${cardHolderName}, ${expirationDate}, ${cvv}, ${userId})
            returning *`;
        res.status(201).json({ success: true, message: createdBankCard });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.postBankCard = postBankCard;
const postBankCardUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const bankCard = yield (0, connection_1.default) `insert into "bankCard" where userId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: bankCard });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.postBankCardUserId = postBankCardUserId;
const getBankCardUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const bankCard = yield (0, connection_1.default) `select * from "bankCard" where userId = ${userId}
            `;
        res.status(200).json({ success: true, message: bankCard });
    }
    catch (error) {
        res.status(201).json({ success: false, message: error.message });
    }
});
exports.getBankCardUserId = getBankCardUserId;
const patchBankCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bankCardId } = req.params;
        const { cardNumber, cardHolderName, expirationDate, cvv } = req.body;
        const bankCard = yield (0, connection_1.default) `update "bankCard" set cardNumber = ${cardNumber}, cardHolderName = ${cardHolderName}, expirationDate = ${expirationDate}, cvv = ${cvv} where id = ${bankCardId}
        returning *`;
        res.status(200).json({ success: true, message: bankCard });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.patchBankCard = patchBankCard;
//# sourceMappingURL=BankCard.js.map