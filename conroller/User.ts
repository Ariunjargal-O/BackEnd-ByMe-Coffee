import { Request, RequestHandler, Response } from "express";
import sql from "../utils/connection";
import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
// id serial primary key,
// email varchar(100) not null unique,
// password varchar(100) not null,
// username varchar(100) not null,
// receivedDonation integer not null,
// createdAt timestamp default current_timestamp,
// updatedAt timestamp default current_timestamp

export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
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
    // console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      
      message: "Failed to create user",
      error: error.message,
    });
  }
};

export const checkUsernameCheck: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { username } = req.body;
    const [existingUser] = await sql`
          select * from "user" where username = ${username};
        `;

    res.json({ exists: !!existingUser });
  } catch (error) {
    console.error("Error checking username:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Only check email — do NOT check password in SQL
    const result = await sql`
      SELECT id, username, email, password FROM "user" 
      WHERE email = ${email}
    `;

    const user = result[0];

    // If email is not found
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // Check password match manually (since passwords are plaintext)
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // Success
    res.status(200).json({
      success: true,
      userId: user.id,
      username: user.username,
      message: 'Login successful!',
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login.',
    });
  }
};




// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const [user] =
//       await sql`select * from "user" where email = ${email} and password = ${password}
// `;

//     // const token = jwt.sign({ user }, process.env.ACCESS_SECRET_KEY, {
//     //   expiresIn: "1h",
//     // });
//     const token = jwt.sign(
//       { id: user.id, email: user.email },
//       process.env.ACCESS_SECRET_KEY as string,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       success: true,
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         username: user.username,
//       },
//       },
//     );
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await sql`select * from "user"`;
    res.status(200).json({ success: true, message: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const patchUserUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { username, password, email } = req.body;

    const updateUser =
      await sql`insert into "user" (username, password, email) values (${username}, ${password}, ${email}) `;
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
