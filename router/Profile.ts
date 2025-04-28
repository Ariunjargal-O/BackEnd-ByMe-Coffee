import express from "express";
import {
  createProfile,
  getAllProfile,
  getUsername,
  patchProfile,
  postProfileUserId,
} from "../conroller/Profile";

export const profileRouter = express.Router();
profileRouter
  .post("/create-pro/:userId", postProfileUserId)
  .patch("/:profileId", patchProfile)
  .get("/view/:username", getUsername) //ok
  .post("/", createProfile) //hrggui
  .get("/", getAllProfile) //ok


//   .get("/current-user", )
//   .get("/explore", );


