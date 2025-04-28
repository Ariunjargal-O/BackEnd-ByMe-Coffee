"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../conroller/User");
const Checking_1 = require("../middleware/Checking");
exports.userRouter = express_1.default.Router();
exports.userRouter
    .patch("/update/:userId", Checking_1.checkUserId, User_1.patchUserUserId)
    .post("/sign-up", Checking_1.checkUsername, User_1.createUser) //ok
    .get("/", User_1.getAllUser); //ok
//# sourceMappingURL=User.js.map