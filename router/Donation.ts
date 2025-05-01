import express from "express";
import {
  getDonationAmountUserId,
  getDonationRecipientIdUserId,
  getDonationUserId,
  postDonation,
} from "../conroller/Donation";
import { checkUserId } from "../middleware/Checking";

export const donationRouter = express.Router();
donationRouter
  .get("/received/:userId", getDonationUserId)
  .get("/total-earnings/:userId", getDonationAmountUserId)
  .get("/get/recipient/:userId", getDonationRecipientIdUserId)
  .post("/create", postDonation);
