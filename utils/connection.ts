import postgres from "postgres";

console.log({sql: process.env.ACCESS_TOKEN})

const sql = postgres(process.env.ACCESS_TOKEN);
export default sql
