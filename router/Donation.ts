import express from "express"
import { getDonationAmountUserId, getDonationRecipientIdUserId, getDonationUserId, postDonation } from "../conroller/Donation"




export  const donationRouter = express.Router()
donationRouter
.post("/create", postDonation)
.get("/received/:userId", getDonationUserId)
.get("/total-earnings/:userId", getDonationAmountUserId)
.get("/get/recipient/:userId", getDonationRecipientIdUserId)
