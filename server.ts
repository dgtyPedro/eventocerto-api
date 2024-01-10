import express from "express";
import { createYoga } from "graphql-yoga";
import { schema } from "./app/schemas/event.schema";

const app = express();
const port = 4000;

const yoga = createYoga({
  schema,
});

app.use("/graphql", yoga);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
