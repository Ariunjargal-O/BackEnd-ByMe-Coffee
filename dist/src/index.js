"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const Profile_1 = require("../router/Profile");
const User_1 = require("../router/User");
const postgres_1 = __importDefault(require("postgres"));
const BankCard_1 = require("../router/BankCard");
const Donation_1 = require("../router/Donation");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", User_1.userRouter);
app.use("/donations", Donation_1.donationRouter);
app.use("/bank-cards", BankCard_1.bankCardRouter);
app.use("/profiles", Profile_1.profileRouter);
app.get("/", (_req, res) => {
    res.status(200).json({ sucsecc: true, message: "Welcome to ByMe-Coffee" });
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const sql = (0, postgres_1.default)(process.env.ACCESS_TOKEN);
    return console.log(`server is listening on ${port}`);
}));
//# sourceMappingURL=index.js.map