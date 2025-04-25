"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = __importDefault(require("express"));
const Profile_1 = require("../conroller/Profile");
exports.profileRouter = express_1.default.Router();
exports.profileRouter
    .post("/post", Profile_1.createProfile);
//# sourceMappingURL=Profile.js.map