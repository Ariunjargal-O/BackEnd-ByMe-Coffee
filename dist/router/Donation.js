"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRouter = void 0;
const express_1 = __importDefault(require("express"));
const Donation_1 = require("../conroller/Donation");
const Checking_1 = require("../middleware/Checking");
exports.donationRouter = express_1.default.Router();
exports.donationRouter
    .get("/received/:userId", Checking_1.checkUserId, Donation_1.getDonationUserId)
    .get("/total-earnings/:userId", Checking_1.checkUserId, Donation_1.getDonationAmountUserId)
    .get("/get/recipient/:userId", Checking_1.checkUserId, Donation_1.getDonationRecipientIdUserId)
    .post("/create", Donation_1.postDonation);
//# sourceMappingURL=Donation.js.map