import express from "express";
import { Request, Response } from "express";


const app = express();
const port = 8000;

// app.use("/users/")
// app.use("/donations/")
// app.use("/bankCards/")
// app.use("/profiles/")


app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ sucsecc: true, message: "Welcome to ByMe-Coffee" });
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
