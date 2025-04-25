import { Request, Response } from "express";
import dotenv from "dotenv"
dotenv.config()
import sql from "../utils/connection";
// id serial primary key,
// email varchar(100) not null unique,
// password varchar(100) not null,
// username varchar(100) not null,
// receivedDonation integer not null,
// createdAt timestamp default current_timestamp,
// updatedAt timestamp default current_timestamp



export const createUser = async(req:Request, res:Response) => {
try{
    const {username, password,receivedDonation, email} = req.body

    console.log(username, password)
    const createdUser = await sql`     insert into "user" (username, password, email,receivedDonation ) values (${username}, ${email},${password}, ${receivedDonation})
    returning *;`

    res.status(201).json({success:true, message:createdUser})

}catch(error){

}
}

export const loginUser = async() => {

}

export const getUser = async(req:Request, res:Response) => {
    const users = await sql`select * from "bankCard"`;
    console.log({users})
    res.json(users)
}