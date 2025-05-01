import sql from "../utils/connection";
import { Request, Response } from "express";

export const postDonation = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      specialMessage,
      socialURLOrBuyMeACoffee,
      donorId,
      recipientId,
    } = req.body as {
      amount: number;
      specialMessage: string;
      socialURLOrBuyMeACoffee: string;
      donorId: number;
      recipientId: number;
    };
    const createdDonation =
      await sql`INSERT INTO donation (amount, specialMessage, socialURLOrBuyMeACoffee, donorId, recipientId) 
      VALUES (${amount}, ${specialMessage}, ${socialURLOrBuyMeACoffee}, ${donorId}, ${recipientId})
      RETURNING *`;
      res.status(201).json({ success: true, message: createdDonation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getDonationUserId = async (req: Request, res: Response) => {
    try{
        const { userId } = req.params;
        const donation = await sql`select * from "user" where donorId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: donation });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getDonationAmountUserId = async (req:Request, res:Response) => {
    try{
        const { userId } = req.params;
        const donation = await sql`select * from donation where donorid = ${userId}
        `;
        res.status(200).json({ success: true, message: donation[0] }); 
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getDonationRecipientIdUserId = async (req:Request, res:Response) => {
    try{
        const { userId } = req.params;
        const donation = await sql`select * from donation where recipientId = ${userId}
        returning *`;
        res.status(200).json({ success: true, message: donation });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }   
}

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
