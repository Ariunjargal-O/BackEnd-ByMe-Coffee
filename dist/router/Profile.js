"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = __importDefault(require("express"));
const Profile_1 = require("../conroller/Profile");
const Checking_1 = require("../middleware/Checking");
exports.profileRouter = express_1.default.Router();
exports.profileRouter
    .post("/create-pro/:userId", Profile_1.postProfileUserId)
    .patch("/update/:profileId", Profile_1.patchProfile)
    .get("/view/:username", Checking_1.checkUsername, Profile_1.getUsername) //ok
    .post("/create-pro", Profile_1.createProfile) //hrggui
    .get("/", Profile_1.getAllProfile) //ok
    .get("/current-user", Profile_1.getAllProfile)
    .get("/explore", Profile_1.getAllProfile);
//# sourceMappingURL=Profile.js.map