import express from "express";
import { createUser, getUser } from "../conroller/User";

export const userRouter = express.Router();
userRouter.post("/sign-up", createUser).get("/", getUser);
