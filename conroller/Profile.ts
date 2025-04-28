import { Request, Response } from "express";
import sql from "../utils/connection";



export const createProfile = async (req: Request, res: Response) => {
  try {
    const {
      id,
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      userId,
      createdAt,
      updatedAt,
      successMessage,
    } = req.body;

    const createProfile =
      await sql`insert into profile (id, name, about, avatarImage, socialMediaURL, backgroundImage, userId, createdAt, updatedAt, successMessage) values (${id}, ${name}, ${about}, ${avatarImage}, ${socialMediaURL},${backgroundImage}, ${userId},${createdAt},${updatedAt}, ${successMessage})
    returning *`;
    res.status(201).json({ success: true, message: createProfile });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const postProfileUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const {
      id,
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      createdAt,
      updatedAt,
      successMessage,
    } = req.body;

    const profile = await sql`insert into profile ( id,
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
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const getAllProfile = async (_req: Request, res: Response) => {
  try {
    const profile = await sql`select * from profile `;
    res.status(200).json({ success: true, message: profile });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const profile = await sql`select * from "user" where username = ${username}
   `;
    res.status(200).json({ success: true, message: profile });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const patchProfile = async (req: Request, res: Response) => {
  try {
    const { profileId } = req.params;
    const updateProfile =
      await sql`update profile set name = ${req.body.name}, about = ${req.body.about}, avatarImage = ${req.body.avatarImage}, socialMediaURL = ${req.body.socialMediaURL}, backgroundImage = ${req.body.backgroundImage}, userId = ${req.body.userId} where id = ${profileId} returning *`;
    res.status(200).json({ success: true, message: updateProfile });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

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
