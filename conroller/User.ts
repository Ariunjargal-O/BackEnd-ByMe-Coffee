import { Request, RequestHandler, Response } from "express";
import sql from "../utils/connection";
// id serial primary key,
// email varchar(100) not null unique,
// password varchar(100) not null,
// username varchar(100) not null,
// receivedDonation integer not null,
// createdAt timestamp default current_timestamp,
// updatedAt timestamp default current_timestamp


export const checkUsername: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const existingUser = await sql`
      select * from users where username = ${username};
    `;
    if (existingUser.length > 0) {
      res.json({ exists: true });
    } 
  } catch (error) {
    console.error("Error checking username:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { username, password, email } = req.body;


    const createdUser = await sql`
         INSERT INTO "user" (username, password, email) 
         VALUES (${username}, ${password}, ${email})
         RETURNING *`;

    res.status(201).json({
      success: true,
      message: createdUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};






export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user =
      await sql`select * from "user" where email = ${email} and password = ${password}
    returning *`;
    res.status(200).json({ success: true, message: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await sql`select * from "user"`
    res.status(200).json({ success: true, message: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const patchUserUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { username, password, email, receivedDonation } = req.body;
  
    const updateUser =
      await sql`update "user" set username = ${username}, password = ${password}, email = ${email}, receivedDonation = ${receivedDonation} where id = ${userId}
    returning *`;
    res.status(200).json({ success: true, message: updateUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


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
