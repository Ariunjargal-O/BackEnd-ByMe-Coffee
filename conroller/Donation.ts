import sql from "../utils/connection"




export const donationPost = async(req:Request, res:Response) => {
    try{
const createdDonation = await sql`select * `
    }catch(error) {

    }
}

// export const donationget = app.get("/donation", async(_req: Request, res: Response) => {
//     const donation = await sql`select 
//   `
//   })