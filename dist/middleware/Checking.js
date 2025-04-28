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
exports.checkBankCardId = exports.checkProfileId = exports.checkUserId = exports.checkUsername = void 0;
const connection_1 = __importDefault(require("../utils/connection"));
const checkUsername = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.body;
        const existingUser = yield (0, connection_1.default) `
        select * from "user" where username = ${username};
      `;
        if (existingUser.length > 0) {
            res.json({ exists: true });
        }
        else {
            res.json({ exists: false });
        }
    }
    catch (error) {
        console.error("Error checking username:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});
exports.checkUsername = checkUsername;
const checkUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const existingUser = yield (0, connection_1.default) ` select * from "user" where userId = ${userId}`;
        if (existingUser.length > 0) {
            res.json({ exists: true });
        }
        else {
            res.json({ exists: false });
        }
    }
    catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});
exports.checkUserId = checkUserId;
const checkProfileId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profileId } = req.body;
        const existingUser = yield (0, connection_1.default) ` select * from profile where profileId = ${profileId}`;
        if (existingUser.length > 0) {
            res.json({ exists: true });
        }
        else {
            res.json({ exists: false });
        }
    }
    catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});
exports.checkProfileId = checkProfileId;
const checkBankCardId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bankCardId } = req.body;
        const existingUser = yield (0, connection_1.default) ` select * from "BankCard" where bankCardId = ${bankCardId}`;
        if (existingUser.length > 0) {
            res.json({ exists: true });
        }
        else {
            res.json({ exists: false });
        }
    }
    catch (error) {
        res.status(500).json({ success: true, message: error.message });
    }
});
exports.checkBankCardId = checkBankCardId;
//# sourceMappingURL=Checking.js.map