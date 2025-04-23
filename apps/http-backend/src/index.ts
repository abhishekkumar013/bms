import express, { Request, Response } from "express";
import { Client } from "@repo/db/client";

const app = express();

app.use(express.json());

import BasicRoutes from "./routes/basic.routes";

app.use("/api/v1", BasicRoutes);

app.listen(5050, () => {
  console.log("Server started at port 5050");
});
