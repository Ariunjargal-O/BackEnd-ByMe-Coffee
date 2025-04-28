import { Request, Response } from "express";
import sql from "../utils/connection";

// -- Check if the user exists, insert into profile, and return the new profile
// WITH user_check AS (
//   SELECT * FROM "user" WHERE "userId" = 1
// )
// INSERT INTO "profile" (
//   "name", "about", "avatarImage", "socialMediaURL", "backgroundImage", "successMessage", "userId"
// )
// SELECT
//   'arii',
//   'hello i\'m arii',
//   'avatarimage',
//   'https://www.facebook.com/profile.php?id=100010655025939&locale=ja_JP',
//   'background',
//   'okey',
//   1  -- userId for the new profile
// FROM user_check
// WHERE EXISTS (SELECT 1 FROM user_check)
// RETURNING *;

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

// export const postProfileUserId = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const {
//       id,
//       name,
//       about,
//       avatarImage,
//       socialMediaURL,
//       backgroundImage,
//       createdAt,
//       updatedAt,
//       successMessage,
//     } = req.body;

//      const userExists = await sql`
//       SELECT * FROM "user" WHERE "userId" = ${userId}`
//       if (userExists.length === 0) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }

//     const profile = await sql`insert into "user" where userId = ${userId} values (${id}, ${name}, ${about}, ${avatarImage}, ${socialMediaURL},${backgroundImage}, ${userId},${createdAt},${updatedAt}, ${successMessage})
//    `;
//     res.status(200).json({ success: true, message: profile });
//   } catch (error: any) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

export const postProfileUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Extract userId from the URL params
    const {
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      createdAt,
      updatedAt,
      successMessage,
    } = req.body; // Extract profile data from the request body

    // SQL query to check if the user exists and insert the profile data
    const profile = await sql`
      WITH user_check AS (
        SELECT * FROM "user" WHERE "userId" = ${userId}
      )
      INSERT INTO "profile" (
        "name", "about", "avatarImage", "socialMediaURL", "backgroundImage", "successMessage", "userId", "createdAt", "updatedAt"
      )
      SELECT 
        ${name}, ${about}, ${avatarImage}, ${socialMediaURL}, ${backgroundImage}, ${successMessage}, ${userId}, ${createdAt}, ${updatedAt}
      FROM user_check
      WHERE EXISTS (SELECT 1 FROM user_check)
      RETURNING *;
    `;

    // Return the newly inserted profile data
    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      profile: profile[0], // Sending the first inserted profile as the response
    });
  } catch (error: any) {
    console.error(error);
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
    const profile = await sql`select * from profile where name = ${username}
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
