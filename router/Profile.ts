import express from "express";
import {
  createProfile,
  getAllProfile,
  getUsername,
  patchProfile,
  postProfileUserId,
} from "../conroller/Profile";
import {
  checkProfileId,
  checkUserId,
  checkUsername,
} from "../middleware/Checking";

export const profileRouter = express.Router();
profileRouter
  .post("/create-pro/:userId", checkUserId, postProfileUserId)
  .patch("/update/:profileId", checkProfileId, patchProfile)
  .get("/view/:username", checkUsername, getUsername) //ok
  .post("/create-pro", createProfile) //hrggui
  .get("/", getAllProfile) //ok
  .get("/current-user", getAllProfile)
  .get("/explore", getAllProfile);
