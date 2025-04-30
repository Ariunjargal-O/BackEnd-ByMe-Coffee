import express from "express";
import {
  createProfile,
  getAllProfile,
  getProfileUserId,
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
.get("/:userId",getProfileUserId ) //  
  .post("/create-pro/:userId",  postProfileUserId)
  .patch("/update/:profileId", patchProfile)
  .get("/view/:username", checkUsername, getUsername) //ok
  .post("/create-pro", createProfile) //hrggui
  .get("/", getAllProfile) //ok
  .get("/current-user", getAllProfile)
  .get("/explore", getAllProfile);
