import express from "express";
import { Router, Request, Response } from "express";

const app = express();
const port = 3000;

const eventRouter = require("./routes/eventRoutes");

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/events", eventRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
