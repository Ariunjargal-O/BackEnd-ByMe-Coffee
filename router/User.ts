import express from "express";
import {
  checkUsernameCheck,
  createUser,
  getAllUser,
  loginUser,
  patchUserUserId,
} from "../conroller/User";
import { checkUserId, checkUsername } from "../middleware/Checking";

export const userRouter = express.Router();
userRouter

  .patch("/update/:userId", checkUserId, patchUserUserId)
  .post("/sign-up", createUser) //ok
  .post("/sign-up/username", checkUsernameCheck) //ok
  .get("/", getAllUser) //ok
  .post("/sign-in", loginUser);
