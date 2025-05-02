import { Request, Response } from "express";
import sql from "../utils/connection";
import { jwtDecode } from "jwt-decode";

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
    console.log(req.body);

    const { name, about, avatarImage, socialMediaUrl } = req.body;

    const profile = await sql`
      INSERT INTO profile (
        name,
        about,
        avatarImage,
        socialMediaURL,
        userid
      ) VALUES (
        ${name},
        ${about},
        ${avatarImage},
        ${socialMediaUrl},
        ${userId}
      )
      RETURNING *;
    `;

    res.status(200).json({ success: true, message: profile[0] });
  } catch (error: any) {
    console.error("Error inserting profile:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProfileUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const profile = await sql`
      SELECT * FROM profile WHERE "userid" = ${userId}
    `;

    res.status(200).json({ success: true, message: profile[0] });
  } catch (error: any) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllProfile = async (_req: Request, res: Response) => {
  try {
    const profile = await sql`select * from profile `;
    // await sql`select * from profile left join "user" on profile.userId = user.id where profile.userId = `;
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
      await sql`update profile set name = ${req.body.name}, about = ${req.body.about}, avatarImage = ${req.body.avatarImage}, socialMediaURL = ${req.body.socialMediaURL}, backgroundImage = ${req.body.backgroundImage} where id = ${profileId} returning *`;
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
