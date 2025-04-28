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
exports.getDonationRecipientIdUserId = exports.getDonationAmountUserId = exports.getDonationUserId = exports.postDonation = void 0;
const connection_1 = __importDefault(require("../utils/connection"));
const postDonation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, specialMessage, socialURLOrBuyMeACoffee, donorId, recipientId, } = req.body;
        const createdDonation = yield (0, connection_1.default) `insert into from donution (amount, specialMessage, socialURLOrBuyMeACoffee, donorId, recipientId) values (${amount}, ${specialMessage}, ${socialURLOrBuyMeACoffee}, ${donorId}, ${recipientId})
      ruturning *`;
        res.status(201).json({ success: true, message: createdDonation });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.postDonation = postDonation;
const getDonationUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const donation = yield (0, connection_1.default) `select * from donation where donorId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: donation });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getDonationUserId = getDonationUserId;
const getDonationAmountUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const donation = yield (0, connection_1.default) `select sum(amount) from donation where donorId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: donation });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getDonationAmountUserId = getDonationAmountUserId;
const getDonationRecipientIdUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const donation = yield (0, connection_1.default) `select * from donation where recipientId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: donation });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getDonationRecipientIdUserId = getDonationRecipientIdUserId;
// ene gurav ni donationii hesgees uur uur zuileer haij bgaa bz dee. gj oilgoh ni zuv uu?? jishee ni total-earnings ni amountaar get , received ni recipientId -aar get, search-donations ni ?? yu gj uzeh ve??
// create table "donation" (
//     id serial primary key,
//     amount integer not null,
//     specialMessage varchar(100) not null,
//     socialURLOrBuyMeACoffee varchar(100) not null,
//     donorId integer "users"(id),
//     recipientId integer "users"(id),
//     createdAt timestamp default current_timestamp,
//     updatedAt timestamp default current_timestamp
// )
//# sourceMappingURL=Donation.js.map