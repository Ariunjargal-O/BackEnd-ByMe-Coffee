
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
      await sql`insert into profile (id, name, about, avatarImage, socialMediaURL, backgroundImage, userId, createdAt, updatedAt, successMessage) values (${req.body.id}, ${req.body.name}, ${req.body.about}, ${req.body.avatarImage}, ${req.body.socialMediaURL},${req.body.backgroundImage}, ${req.body.userId},${req.body.createdAt},${req.body.updatedAt}, ${req.body.successMessage})
    returning *`;
    res.status(201).json({ success: true, message: createProfile });
  } catch (error:any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProfile = async (req:Request, res:Response) => {
    
}




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
