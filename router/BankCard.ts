import express from "express";
import {
  getBankCardUserId,
  patchBankCard,
  postBankCardUserId,
} from "../conroller/BankCard";
import { checkBankCardId, checkUserId } from "../middleware/Checking";



export const bankCardRouter = express.Router();
bankCardRouter
  .post("/create/:userId",  postBankCardUserId)
  .get("/:userId",  getBankCardUserId)
  .patch("/:bankCardId", patchBankCard);
