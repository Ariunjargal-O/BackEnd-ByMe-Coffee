import { NextFunction, Request, RequestHandler, Response } from "express";
import sql from "../utils/connection";

export const checkUsername: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;
    const [existingUser] = await sql`
        select * from "user" where username = ${username};
      `;

    if (!existingUser) res.status(404).send("not found");
    next();
  } catch (error) {
    console.error("Error checking username:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



export const checkUserId: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const { userId } = req.params;
    const existingUser =
      await sql` select * from "user" where id = ${userId}`;
    if (existingUser.length > 0) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

export const checkProfileId: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const { profileId } = req.params;
    const existingUser =
      await sql` select * from profile where profileId = ${profileId}`;
    if (existingUser.length > 0) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};

export const checkBankCardId: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const { bankCardId } = req.params;
    const existingUser =
      await sql` select * from "BankCard" where bankCardId = ${bankCardId}`;
    if (existingUser.length > 0) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ success: true, message: error.message });
  }
};
