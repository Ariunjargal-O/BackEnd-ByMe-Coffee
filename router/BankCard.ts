import express from "express";
import {
  getBankCardUserId,
  patchBankCard,
  postBankCard,
  postBankCardUserId,
} from "../conroller/BankCard";



export const bankCardRouter = express.Router();
bankCardRouter
  .post("/:userId", postBankCardUserId)
  .get("/:userId", getBankCardUserId)
  .patch("/:bankCardId", patchBankCard);
