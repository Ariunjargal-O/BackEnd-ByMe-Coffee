import express from "express";
import { checkUsername, createUser, getAllUser, patchUserUserId } from "../conroller/User";

export const userRouter = express.Router();
userRouter

.patch("/update/:userId", checkUsername)
.patch("/update/:userId", patchUserUserId)
.post("/sign-up",createUser) //ok
.post("/sign-up",checkUsername) //ok
.get("/", getAllUser) //ok


