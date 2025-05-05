import { Request, Response } from "express";
import sql from "../utils/connection";

export const createBankCard = async (req: Request, res: Response) => {
  try {
    const { id, country, firstName, lastName, cardNumber, expiryDate } =
      req.body;
    const createdBankCard =
      await sql`insert into bankCard (id, country, firstName, lastName, cardNumber, expiryDate) values (${id}, ${country}, ${firstName}, ${lastName}, ${cardNumber}, ${expiryDate},)
            returning *`;
    res.status(201).json({ success: true, message: createdBankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const postBankCardUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { country, firstName, lastName, cardNumber, expiryDate } = req.body;
    const bankCard = await sql`
    INSERT INTO "bankCard" (
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate,
        userid
      ) VALUES (
        ${country},
        ${firstName},
        ${lastName},
        ${cardNumber},
        ${expiryDate},
        ${userId}
      )
      RETURNING *;
    `;

    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBankCardUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const bankCard = await sql`
      SELECT * FROM "bankCard" WHERE userid = ${userId}
    `;
    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const patchBankCard = async (req: Request, res: Response) => {
  try {
    const { bankCardId } = req.params;
    const { cardNumber, country, firstName, lastName, expiryDate } = req.body;

    const bankCard = await sql`
      UPDATE "bankCard"
      SET 
        card_number = ${cardNumber},
        expiry_date = ${expiryDate},
        country = ${country},
        first_name = ${firstName},
        last_name = ${lastName}
      WHERE id = ${bankCardId}
      RETURNING *;
    `;

    res.status(200).json({ success: true, message: bankCard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//hh