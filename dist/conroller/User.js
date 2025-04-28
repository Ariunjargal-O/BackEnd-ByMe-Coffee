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
exports.patchUserUserId = exports.getAllUser = exports.loginUser = exports.createUser = void 0;
const connection_1 = __importDefault(require("../utils/connection"));
// id serial primary key,
// email varchar(100) not null unique,
// password varchar(100) not null,
// username varchar(100) not null,
// receivedDonation integer not null,
// createdAt timestamp default current_timestamp,
// updatedAt timestamp default current_timestamp
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const createdUser = yield (0, connection_1.default) `
         INSERT INTO "user" (username, password, email) 
         VALUES (${username}, ${password}, ${email})
         RETURNING *`;
        res.status(201).json({
            success: true,
            message: createdUser,
        });
    }
    catch (error) {
        // console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error: error.message,
        });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, connection_1.default) `select * from "user" where email = ${email} and password = ${password}
    returning *`;
        res.status(200).json({ success: true, message: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.loginUser = loginUser;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, connection_1.default) `select * from "user"`;
        res.status(200).json({ success: true, message: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getAllUser = getAllUser;
const patchUserUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { username, password, email, receivedDonation } = req.body;
        const updateUser = yield (0, connection_1.default) `update "user" set username = ${username}, password = ${password}, email = ${email}, receivedDonation = ${receivedDonation} where id = ${userId}
    returning *`;
        res.status(200).json({ success: true, message: updateUser });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.patchUserUserId = patchUserUserId;
// export const patchUserUserId = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const { username, password, email} = req.body;
//     const userExists = await sql`select * from "user" where "userId = ${userId}`
//     if(userExists.length === 0) {
//       return res.status(404).json({success:false, message:"User not found"})
//     }
//     const updateUser =
//       await sql`insert into "user" where userId = ${userId}update "user" set username = ${username}, password = ${password}, email = ${email}, where id = ${userId}
//     returning *`;
//     res.status(200).json({ success: true, message: updateUser });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
//# sourceMappingURL=User.js.map