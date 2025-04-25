import express from "express";
import { createProfile } from "../conroller/Profile";


export const profileRouter = express.Router()
profileRouter
.post("/post",createProfile)