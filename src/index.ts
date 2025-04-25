import dotenv from "dotenv";
dotenv.config();


import express from "express";
import { Request, Response } from "express";
import { profileRouter } from "../router/Profile";
import { userRouter } from "../router/User";

import postgres from "postgres";
import { bankCardRouter } from "../router/BankAccount";
import { donationRouter } from "../router/Donation";


const app = express();
const port = 8000;
app.use(express.json());

app.use("/users", userRouter);
app.use("/donations", donationRouter);
app.use("/bankCards", bankCardRouter);
app.use("/profiles", profileRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ sucsecc: true, message: "Welcome to ByMe-Coffee" });
});

app.listen(port, async () => {
  const sql = postgres(process.env.ACCESS_TOKEN);
  return console.log(`server is listening on ${port}`);
});
