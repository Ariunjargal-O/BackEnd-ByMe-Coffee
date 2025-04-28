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
  .get("/received/:userId", checkUserId, getDonationUserId)
  .get("/total-earnings/:userId", checkUserId, getDonationAmountUserId)
  .get("/get/recipient/:userId", checkUserId, getDonationRecipientIdUserId)
  .post("/create", postDonation);
