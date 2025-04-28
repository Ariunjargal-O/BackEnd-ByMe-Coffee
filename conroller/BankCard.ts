import sql from "../utils/connection";
import { Request, Response } from "express";

export const postBankCard = async (req: Request, res: Response) => {
  try {
    const { cardNumber, cardHolderName, expirationDate, cvv, userId } =
      req.body;
    const createdBankCard =
      await sql`insert into "bankCard" (cardNumber, cardHolderName, expirationDate, cvv, userId) values (${cardNumber}, ${cardHolderName}, ${expirationDate}, ${cvv}, ${userId})
            returning *`;
    res.status(201).json({ success: true, message: createdBankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const postBankCardUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const bankCard = await sql`insert into "bankCard" where userId = ${userId}
        returning *`;
    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBankCardUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const bankCard = await sql`select * from "bankCard" where userId = ${userId}
            `;
    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(201).json({ success: false, message: error.message });
  }
};

export const patchBankCard = async (req: Request, res: Response) => {
  try {
    const { bankCardId } = req.params;
    const { cardNumber, cardHolderName, expirationDate, cvv } = req.body;
    const bankCard =
      await sql`update "bankCard" set cardNumber = ${cardNumber}, cardHolderName = ${cardHolderName}, expirationDate = ${expirationDate}, cvv = ${cvv} where id = ${bankCardId}
        returning *`;
    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
