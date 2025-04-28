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
exports.patchProfile = exports.getUsername = exports.getAllProfile = exports.postProfileUserId = exports.createProfile = void 0;
const connection_1 = __importDefault(require("../utils/connection"));
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, about, avatarImage, socialMediaURL, backgroundImage, userId, createdAt, updatedAt, successMessage, } = req.body;
        const createProfile = yield (0, connection_1.default) `insert into profile (id, name, about, avatarImage, socialMediaURL, backgroundImage, userId, createdAt, updatedAt, successMessage) values (${id}, ${name}, ${about}, ${avatarImage}, ${socialMediaURL},${backgroundImage}, ${userId},${createdAt},${updatedAt}, ${successMessage})
    returning *`;
        res.status(201).json({ success: true, message: createProfile });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.createProfile = createProfile;
const postProfileUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const { id, name, about, avatarImage, socialMediaURL, backgroundImage, createdAt, updatedAt, successMessage, } = req.body;
        const profile = yield (0, connection_1.default) `insert into profile ( id,
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      createdAt,
      updatedAt,
      successMessage,) values (${id}, ${name}, ${about}, ${avatarImage}, ${socialMediaURL},${backgroundImage}, ${userId},${createdAt},${updatedAt}, ${successMessage})
   `;
        res.status(200).json({ success: true, message: profile });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.postProfileUserId = postProfileUserId;
const getAllProfile = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield (0, connection_1.default) `select * from profile `;
        res.status(200).json({ success: true, message: profile });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getAllProfile = getAllProfile;
const getUsername = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        const profile = yield (0, connection_1.default) `select * from profile where "username" = ${username}
   `;
        res.status(200).json({ success: true, message: profile });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.getUsername = getUsername;
const patchProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profileId } = req.params;
        const updateProfile = yield (0, connection_1.default) `update profile set name = ${req.body.name}, about = ${req.body.about}, avatarImage = ${req.body.avatarImage}, socialMediaURL = ${req.body.socialMediaURL}, backgroundImage = ${req.body.backgroundImage}, userId = ${req.body.userId} where id = ${profileId} returning *`;
        res.status(200).json({ success: true, message: updateProfile });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.patchProfile = patchProfile;
// id varchar(100)primary key,
// name varchar(100) not null,
// about varchar(100) not null,
// avatarImage varchar(100) not null,
// socialMediaURL varchar(100) not null,
// backgroundImage varchar(100) not null,
// successMessage varchar(100) not null,
// userId integer "users"(id),
// createdAt timestamp default current_timestamp,
// updatedAt timestamp default current_timestamp
//# sourceMappingURL=Profile.js.map