import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "Signup successful",
    id: user.id,
  });
});

app.listen(3002);
