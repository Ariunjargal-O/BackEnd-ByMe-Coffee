import express from "express";
import {
  getBankCardUserId,
  patchBankCard,
  postBankCard,
  postBankCardUserId,
} from "../conroller/BankCard";
import { checkBankCardId, checkUserId } from "../middleware/Checking";



export const bankCardRouter = express.Router();
bankCardRouter
  .post("/create/:userId", checkUserId, postBankCardUserId)
  .get("/:userId", checkUserId, getBankCardUserId)
  .patch("/:bankCardId", checkBankCardId, patchBankCard);
